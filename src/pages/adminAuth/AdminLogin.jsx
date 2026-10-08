import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!formData.email || !formData.password) {
            setError("Please enter your email and password.");
            return;
        }

        try {
            setLoading(true);

            const baseUrl = import.meta.env.VITE_API_URL
            console.log(baseUrl)
            const response = await fetch(`${baseUrl}/api/admin/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Invalid email or password.");
            }

            navigate("/admin");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Logo */}
            <div className="px-6 py-6 md:px-10">
                <img
                    src={logo}
                    alt="Growthshark"
                    className="w-[120px] object-contain"
                />

            </div>

            {/* Login */}
            <main className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Welcome back
                        </h2>

                        <p className="mt-2 text-sm text-zinc-500">
                            Log in to your admin account
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-zinc-300"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="admin@email.com"
                                autoComplete="email"
                                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#71B5F0]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-zinc-300"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#71B5F0]"
                            />
                        </div>

                        {/* Login */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-[#71B5F0] px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>

                    {/* Register */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-zinc-500">
                            Register Here
                        </p>

                        <Link
                            to="/admin/register"
                            className="mt-3 block w-full rounded-lg border border-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-[#A9FD00] hover:text-[#A9FD00]"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLogin;