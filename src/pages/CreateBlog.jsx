import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import AdminHeader from "../components/AdminComponents/AdminHeader";

const API = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "")

const initialForm = {
    title: "",
    slug: "",
    excerpt: "",
    content: ""
}

function createSlug(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function AdminBlogCreate() {
    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)
    const [featuredImage, setFeaturedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState("")
    const [slugEdited, setSlugEdited] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleTitlechange = (e) => {
        const title = e.target.value;

        setForm((prev) => ({
            ...prev,
            title,
            slug: slugEdited ? prev.slug : createSlug(title)
        }))
    }

    const handleSlugChange = (e) => {
        setSlugEdited(true);

        setForm(prev => ({
            ...prev,
            slug: createSlug(e.target.value)
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Please select an image file.")
            return
        }

        // check file size
        if (file.size > 5 * 1024 * 1024) {
            setError("Please upload a file less than 5 mb")
            return
        }

        setError("")
        setFeaturedImage(file)
        setImagePreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (status) => {
        setError("");

        if (
            !form.title.trim() ||
            !form.slug.trim() ||
            !form.excerpt.trim() ||
            !form.content.trim()
        ) {
            setError("All fields are required.")
            return;
        }

        if (!featuredImage) {
            setError("Please select a featured image")
            return;
        }

        const formData = new FormData()

        formData.append("title", form.title.trim())
        formData.append("slug", form.slug.trim())
        formData.append("excerpt", form.excerpt.trim())
        formData.append("content", form.content)
        formData.append("status", status)
        formData.append("featuredImage", featuredImage)

        setLoading(true)

        try {
            const response = await fetch(`${API}/api/blogs`, {
                method: "POST",
                credentials: "include",
                body: formData,
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Failed to create blog")
            }

            navigate("/admin/blogs")
        } catch (err) {
            setError(err.message || "something went wrong creating blog")
        } finally {
            setLoading(false)
        }
    }

    //defined classname for inputs
    const inputClass = "w-full rounded-lg border border-stone-700 bg-[#1C1917] px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-colors placeholder:text-stone-500 focus:border-[#A8F000]";

    return (
        <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
            <AdminHeader />

            <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
                <div className="mb-8">
                    <button
                        type="button"
                        onClick={() => navigate("/admin/blogs")}
                        className="mb-5 text-sm text-stone-400 transition-colors hover:text-[#A8F000]"
                    >
                        ← Back to blogs
                    </button>

                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#A8F000]">
                        Content management
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Create article
                    </h1>

                    <p className="mt-2 text-sm text-stone-400">
                        Write, format, and publish a new blog post.
                    </p>
                </div>

                {error && (
                    <div
                        role="alert"
                        className="mb-6 rounded-lg border border-red-900 bg-red-950/40 px-4 py-3 text-sm text-red-300"
                    >
                        {error}
                    </div>
                )}

                <div className="space-y-7 rounded-2xl border border-stone-800 bg-[#111110] p-5 sm:p-8">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Article title
                        </label>

                        <input
                            value={form.title}
                            onChange={handleTitlechange}
                            placeholder="e.g. Why Every Business Needs a Website"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            URL slug
                        </label>

                        <input
                            value={form.slug}
                            onChange={handleSlugChange}
                            placeholder="your-article-slug"
                            className={inputClass}
                        />

                        <p className="mt-2 text-xs text-stone-500">
                            Used in your blog URL. Keep it unique.
                        </p>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Excerpt
                        </label>

                        <textarea
                            value={form.excerpt}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    excerpt: e.target.value,
                                }))
                            }
                            rows={3}
                            maxLength={500}
                            placeholder="Write a short summary for the blog listing..."
                            className={`${inputClass} resize-y`}
                        />

                        <p className="mt-1 text-right text-xs text-stone-500">
                            {form.excerpt.length}/500
                        </p>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Featured image
                        </label>

                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-stone-700 bg-[#09090B] p-6 text-center transition-colors hover:border-[#A8F000]">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Featured image preview"
                                    className="max-h-72 w-full rounded-lg object-cover"
                                />
                            ) : (
                                <>
                                    <span className="mb-3 text-3xl text-[#A8F000]">
                                        +
                                    </span>
                                    <span className="text-sm font-medium">
                                        Choose featured image
                                    </span>
                                    <span className="mt-2 text-xs text-stone-500">
                                        PNG, JPG, or WEBP · Maximum 5 MB
                                    </span>
                                </>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="sr-only"
                            />
                        </label>

                        {featuredImage && (
                            <p className="mt-2 text-xs text-stone-400">
                                Selected: {featuredImage.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Article content
                        </label>

                        <div className="overflow-hidden rounded-lg border border-stone-700">
                            <Editor
                                apiKey={import.meta.env.VITE_TINYMCE_API_KEY || "no-api-key"}
                                value={form.content}
                                onEditorChange={(content) =>
                                    setForm((prev) => ({ ...prev, content }))
                                }
                                init={{
                                    height: 500,
                                    menubar: "file edit view insert format tools table",
                                    plugins: [
                                        "advlist",
                                        "autolink",
                                        "lists",
                                        "link",
                                        "charmap",
                                        "preview",
                                        "searchreplace",
                                        "visualblocks",
                                        "code",
                                        "fullscreen",
                                        "table",
                                        "wordcount",
                                    ],
                                    toolbar:
                                        "undo redo | blocks | bold italic underline | " +
                                        "forecolor | alignleft aligncenter alignright | " +
                                        "bullist numlist | link table | removeformat | code",
                                    block_formats:
                                        "Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4",
                                    content_style: `
                    body {
                      font-family: Inter, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 1.7;
                      color: #292524;
                      padding: 12px;
                    }
                  `,
                                    branding: false,
                                    promotion: false,
                                }}
                            />
                        </div>

                        <p className="mt-2 text-xs text-stone-500">
                            Format your article with headings, paragraphs, links, and lists.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-stone-800 pt-6 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => handleSubmit("draft")}
                            className="rounded-lg border border-stone-700 px-5 py-3 text-sm font-medium transition-colors hover:border-[#A8F000] hover:text-[#A8F000] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Save as draft
                        </button>

                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => handleSubmit("published")}
                            className="rounded-lg bg-[#A8F000] px-5 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#bfff33] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Publish article"}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );


}

export default AdminBlogCreate