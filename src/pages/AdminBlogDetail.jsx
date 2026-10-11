import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../components/AdminComponents/AdminHeader.jsx";


const AdminBlogDetails = ({ slug }) => {

    //taking slug from prop using uselocation() in approuter
    // const { slug } = useParams();
    // console.log(slug)
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [deleting, setDeleting] = useState(false);

    const API = (
        import.meta.env.VITE_API_URL || "http://localhost:5000"
    ).replace(/\/$/, "");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `${API}/api/blogs/admin/${encodeURIComponent(slug)}`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch blog");
                }

                const result = await response.json();
                setBlog(result.data);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setError("Unable to load this blog.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [API, slug]);

    const handleDelete = async () => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${blog.title}" ? This action cannot be undone.`
        );

        if (!confirmed) return;

        try {
            setDeleting(true);
            setError("");

            const response = await fetch(
                `${API}/api/blogs/${blog._id}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete blog");
            }

            navigate("/admin/blogs", { replace: true });
        } catch (error) {
            console.error("Error deleting blog:", error);
            setError("Failed to delete blog. Please try again.");
            setDeleting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
            <AdminHeader />

            <main className="mx-auto max-w-5xl px-6 py-10 md:px-10">
                <button
                    type="button"
                    onClick={() => navigate("/admin/blogs")}
                    className="text-sm text-[#A8A29E] transition-colors hover:text-[#A8F000]"
                >
                    ← Back to blogs
                </button>

                {loading && (
                    <p className="py-16 text-sm text-[#A8A29E]">
                        Loading blog...
                    </p>
                )}

                {!loading && error && !blog && (
                    <div className="mt-8 rounded-xl border border-[#292524] bg-[#1C1917] p-6">
                        <p className="text-sm text-red-400">{error}</p>
                        <button
                            type="button"
                            onClick={() => navigate("/admin/blogs")}
                            className="mt-4 text-sm text-[#A8F000] hover:underline"
                        >
                            Return to blogs
                        </button>
                    </div>
                )}

                {!loading && blog && (
                    <article className="mt-8">
                        {/* Article header */}
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <span
                                    className={`inline-flex rounded-md px-3 py-1 text-xs font-medium ${blog.status === "published"
                                        ? "bg-[#A8F000] text-black"
                                        : "bg-[#292524] text-[#D6D3D1]"
                                        }`}
                                >
                                    {blog.status}
                                </span>

                                <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                                    {blog.title}
                                </h1>

                                <p className="mt-4 text-sm leading-6 text-[#A8A29E]">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#78716C]">
                                    <span>Slug: /{blog.slug}</span>

                                    {blog.createdAt && (
                                        <span>
                                            Created{" "}
                                            {new Date(
                                                blog.createdAt
                                            ).toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    )}

                                    {blog.publishedAt && (
                                        <span>
                                            Published{" "}
                                            {new Date(
                                                blog.publishedAt
                                            ).toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={deleting}
                                className="shrink-0 rounded-lg border border-red-900/70 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-950/50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {deleting ? "Deleting..." : "Delete Blog"}
                            </button>
                        </div>

                        {/* Featured image */}
                        {blog.featuredImage?.url && (
                            <div className="mt-8 overflow-hidden rounded-xl border border-[#292524]">
                                <img
                                    src={blog.featuredImage.url}
                                    alt={blog.title}
                                    className="max-h-[520px] w-full object-cover"
                                />
                            </div>
                        )}

                        {/* Full blog content */}
                        <section className="mt-10 rounded-xl border border-[#292524] bg-[#1C1917] p-6 md:p-10">
                            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8F000]">
                                Article content
                            </h2>

                            <div className="whitespace-pre-wrap break-words text-sm leading-8 text-[#D6D3D1]">
                                {blog.content}
                            </div>
                        </section>

                        {error && (
                            <p className="mt-4 text-sm text-red-400">
                                {error}
                            </p>
                        )}
                    </article>
                )}
            </main>
        </div>
    );
};

export default AdminBlogDetails;
