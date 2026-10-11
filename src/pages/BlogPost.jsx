import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const API = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

export default function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPost() {
      try {
        setLoading(true);
        setError("");
        setPost(null);

        const response = await fetch(
          `${API}/api/blogs/${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        );

        if (response.status === 404) {
          throw new Error("Blog post not found.");
        }

        if (!response.ok) {
          throw new Error(`Failed to load blog(${response.status})`);
        }

        const result = await response.json();
        const blog = result.data;

        if (!blog || !blog.title) {
          throw new Error("Invalid blog response.");
        }

        setPost(blog);
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

    if (slug) {
      fetchPost();
    }

    return () => controller.abort();
  }, [slug]);

  const stripHtmlTags = (html = "") =>
    html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  if (loading) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] px-6 text-white">
        <p className="animate-pulse text-lg">Loading article...</p>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] px-6 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">Article unavailable</h1>

          <p className="mt-3 text-slate-300">
            {error || "We couldn't find this blog post."}
          </p>

          <Link
            to="/blog"
            className="mt-6 inline-block rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
          >
            Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  const title = stripHtmlTags(post.title);
  const description = stripHtmlTags(post.excerpt);
  const featuredImage = post.featuredImage?.url;

  return (
    <main className="min-h-screen bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] py-10 md:py-14">
      <Helmet>
        <title>{title} | GrowthShark</title>

        <meta
          name="description"
          content={description.slice(0, 160)}
        />

        {featuredImage && (
          <meta property="og:image" content={featuredImage} />
        )}

        <meta property="og:title" content={`${title} | GrowthShark`} />
        <meta property="og:description" content={description.slice(0, 160)} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="mx-auto max-w-4xl px-6 pt-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300"
        >
          <span aria-hidden="true">←</span>
          All blogs
        </Link>

        <header className="pb-6 pt-8">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl md:leading-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {description}
            </p>
          )}
        </header>

        {featuredImage && (
          <div className="mb-10 overflow-hidden rounded-2xl">
            <img
              src={featuredImage}
              alt={title}
              className="max-h-[480px] w-full object-cover"
            />
          </div>
        )}

        <div
          className="
            blog-content max-w-none text-slate-100
            [&_p]:mb-6 [&_p]:text-base [&_p]:leading-8
            md:[&_p]:text-lg
            [&_h1]:mb-6 [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-bold
            [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold
            [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold
            [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
            [&_li]:leading-7
            [&_a]:text-sky-400 [&_a]:underline [&_a:hover]:text-sky-300
            [&_img]:my-8 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl
            [&_blockquote]:my-8 [&_blockquote]:border-l-4
            [&_blockquote]:border-sky-400 [&_blockquote]:pl-5
            [&_blockquote]:italic [&_blockquote]:text-slate-300
            [&_strong]:font-bold [&_strong]:text-white
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-14 border-t border-white/15 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <span aria-hidden="true">←</span>
            Explore more blogs
          </Link>
        </footer>
      </article>
    </main>
  );
}
