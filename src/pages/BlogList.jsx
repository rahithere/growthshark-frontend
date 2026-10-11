import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const API = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBlogs() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/api/blogs`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load blogs (${response.status})`);
        }

        const result = await response.json();

        // Supports your ApiResponse format and a plain array.
        const blogs = Array.isArray(result.data)
          ? result.data
          : Array.isArray(result)
            ? result
            : [];

        setPosts(blogs);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] pt-20">
      <Helmet>
        <title>
          Helpful Tips for Better Marketing and Faster Growth | GrowthShark
        </title>
        <meta
          name="description"
          content="Explore GrowthShark blogs about SEO, digital marketing, content strategy, and business growth."
        />
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        {/* Page heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Insights & Resources
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Our Latest Blogs
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
            Helpful insights, practical strategies, and fresh ideas to help
            your business grow.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-2xl bg-white p-4"
              >
                <div className="h-48 rounded-xl bg-slate-200" />
                <div className="mt-5 h-6 rounded bg-slate-200" />
                <div className="mt-3 h-4 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-8 text-center">
            <p className="text-lg font-semibold text-white">
              Unable to load blogs
            </p>

            <p className="mt-2 text-sm text-slate-300">{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="rounded-2xl bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              No blogs published yet
            </h2>

            <p className="mt-2 text-slate-600">
              Check back soon for new insights from GrowthShark.
            </p>
          </div>
        )}

        {/* Blog cards */}
        {!loading && !error && posts.length > 0 && (
          // main container 3 col
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="flex flex-col rounded-2xl bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Featured image */}
                <Link
                  to={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="block overflow-hidden rounded-xl"
                >
                  {post.featuredImage?.url ? (
                    <img
                      src={post.featuredImage.url}
                      alt={post.title}
                      loading="lazy"
                      className="h-48 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-48 place-items-center bg-slate-100 text-slate-400">
                      No featured image
                    </div>
                  )}
                </Link>

                {/* Blog content */}
                <div className="flex flex-1 flex-col pt-4">
                  <h2 className="text-xl font-extrabold leading-7 text-black">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="transition hover:text-blue-700"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-base leading-6 text-slate-700">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-5">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-medium text-black underline underline-offset-4 transition hover:text-blue-700"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}