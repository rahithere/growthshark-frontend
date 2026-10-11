import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminComponents/AdminHeader.jsx";

const AdminBlogs = () => {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = (
        import.meta.env.VITE_API_URL || "http://localhost:5000"
    ).replace(/\/$/, "");

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `${API}/api/blogs/admin/all`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch blogs");
            }

            const result = await response.json();
            setBlogs(result.data || []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Unable to load blogs. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
            <AdminHeader />

            <main className="mx-auto max-w-[1600px] px-6 py-10 md:px-10">
                {/* Page heading */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8F000]">
                            Content management
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Blog posts
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#A8A29E]">
                            Create and manage your articles, from drafts
                            to published posts.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/admin/blogs/create")}
                        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#A8F000] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#BDF53D] sm:self-auto"
                    >
                        <span className="text-lg leading-none">+</span>
                        Create blog
                    </button>
                </div>

                {/* Blog count and refresh */}
                <div className="mt-10 flex items-center justify-between border-b border-[#292524] pb-4">
                    <p className="text-sm text-[#A8A29E]">
                        {blogs.length} {blogs.length === 1 ? "article" : "articles"}
                    </p>

                    <button
                        type="button"
                        onClick={fetchBlogs}
                        disabled={loading}
                        className="text-sm text-[#A8A29E] transition-colors hover:text-[#A8F000] disabled:opacity-50"
                    >
                        {loading ? "Loading..." : "Refresh"}
                    </button>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="animate-pulse overflow-hidden rounded-xl border border-[#292524] bg-[#1C1917]"
                            >
                                <div className="aspect-[16/9] bg-[#292524]" />
                                <div className="space-y-3 p-5">
                                    <div className="h-4 w-3/4 rounded bg-[#292524]" />
                                    <div className="h-3 w-full rounded bg-[#292524]" />
                                    <div className="h-3 w-1/2 rounded bg-[#292524]" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="mt-8 rounded-xl border border-red-900/50 bg-[#1C1917] p-6">
                        <p className="text-sm text-red-400">{error}</p>

                        <button
                            type="button"
                            onClick={fetchBlogs}
                            className="mt-4 text-sm font-medium text-[#A8F000] hover:underline"
                        >
                            Try again
                        </button>
                    </div>
                )}

                {/* Empty state */}
                {!loading && !error && blogs.length === 0 && (
                    <div className="mt-8 rounded-xl border border-[#292524] bg-[#1C1917] px-6 py-16 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#44403C] text-2xl text-[#A8F000]">
                            +
                        </div>

                        <h2 className="mt-5 text-lg font-medium">
                            No blog posts yet
                        </h2>

                        <p className="mt-2 text-sm text-[#A8A29E]">
                            Create your first article to get started.
                        </p>

                        <button
                            type="button"
                            onClick={() => navigate("/admin/blogs/create")}
                            className="mt-6 rounded-lg bg-[#A8F000] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#BDF53D]"
                        >
                            Create your first blog
                        </button>
                    </div>
                )}

                {/* Blog card grid */}
                {!loading && !error && blogs.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <article
                                key={blog._id}
                                onClick={() =>
                                    navigate(`/admin/blogs/${blog.slug}`)
                                }
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        event.preventDefault();
                                        navigate(`/admin/blogs/${blog.slug}`);
                                    }
                                }}
                                role="link"
                                tabIndex={0}
                                className="group cursor-pointer overflow-hidden rounded-xl border border-[#292524] bg-[#1C1917] transition-colors duration-200 hover:border-[#57534E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8F000]"
                            >
                                {/* Featured image */}
                                <div className="relative aspect-[16/9] overflow-hidden bg-[#292524]">
                                    {blog.featuredImage?.url ? (
                                        <img
                                            src={blog.featuredImage.url}
                                            alt={blog.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-sm text-[#A8A29E]">
                                            No featured image
                                        </div>
                                    )}

                                    <span
                                        className={`absolute left - 4 top - 4 rounded - md px - 3 py - 1 text - xs font - medium ${blog.status === "published"
                                            ? "bg-[#A8F000] text-black"
                                            : "bg-[#292524] text-[#D6D3D1]"
                                            } `}
                                    >
                                        {blog.status || "draft"}
                                    </span>
                                </div>

                                {/* Card content */}
                                <div className="p-5">
                                    <p className="text-xs text-[#A8A29E]">
                                        {blog.createdAt
                                            ? new Date(
                                                blog.createdAt
                                            ).toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })
                                            : "Date unavailable"}
                                    </p>

                                    <h2 className="mt-3 line-clamp-2 text-lg font-semibold leading-7 text-[#FAFAFA] transition-colors group-hover:text-[#A8F000]">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#A8A29E]">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#292524] pt-4">
                                        <span className="text-sm font-medium text-[#A8F000]">
                                            View details →
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminBlogs;