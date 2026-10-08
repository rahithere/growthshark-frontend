import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const API = import.meta.env.VITE_PRORITERZ_API || "https://proriterz.com/wp-json/wp/v2";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${API}/posts?_embed&per_page=12`, { signal: ac.signal });
        if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        if (e.name !== "AbortError") setErr(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  if (loading) return <div className="min-h-[50vh] grid place-items-center">Loading…</div>;
  if (err) return <div className="min-h-[50vh] grid place-items-center text-red-500">{err}</div>;

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f]">
      <Helmet>
        <title>Helpful Tips for Better Marketing and Faster Growth | Growthshark</title>
        <meta
          name="description"
          content="Read the latest blogs on SEO, marketing, and business growth from GrowthShark. Learn practical tips to grow your brand. Start reading now."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-6 py-30">
      {/* <h1 className="text-3xl font-bold mb-8">Blogs</h1> */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const media = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const title = p.title?.rendered || "";
          const excerpt = p.excerpt?.rendered || "";
          const slug = p.slug;
          return (
            <article key={p.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
              {media && (
                <img
                  src={media}
                  alt=""
                  className="rounded-xl w-full h-48 object-cover mb-3"
                  loading="lazy"
                />
              )}
              <Link
                to={`/blog/${slug}`}
                className="text-xl font-semibold hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div className="prose prose-sm max-w-none mt-3"
                   dangerouslySetInnerHTML={{ __html: excerpt }} />
              <Link to={`/blog/${slug}`} className="mt-4 inline-block underline">
                Read more
              </Link>
            </article>
          );
        })}
      </div>
      </div>
    </div>
  );
}
