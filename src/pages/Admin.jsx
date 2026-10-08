import { useEffect, useState } from "react";

import AdminHeader from "../components/AdminComponents/AdminHeader.jsx";
import AdminStats from "../components/AdminComponents/AdminStats.jsx";
import SubmissionFilters from "../components/AdminComponents/AdminFilters.jsx";
import SubmissionWorkspace from "../components/AdminComponents/AdminWorkspace.jsx";

const Admin = () => {
    const [submissions, setSubmissions] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    const [source, setSource] = useState("all");
    const [mode, setMode] = useState("all");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //resuable function that can be called when refresh button is clicked
    const fetchSubmissions = async () => {
        try {
            setLoading(true);
            setError("");

            // const baseUrl = import.meta.env.VITE_API_URL
            const baseUrl = "https://growth-shark-backend-3aiw.onrender.com"
            const response = await fetch(
                `${baseUrl}/api/admin/submissions`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch submissions");
            }

            const result = await response.json();

            setSubmissions(result.data);
        } catch (error) {
            console.error("Error fetching submissions:", error);
            setError("Failed to load submissions");
        } finally {
            setLoading(false);
        }
    };


    // Fetch submissions for the first time
    useEffect(() => {
        fetchSubmissions();
    }, []);

    // Filter submissions
    const filteredSubmissions = submissions.filter((submission) => {
        const sourceMatch =
            source === "all" || submission.source === source;

        const modeMatch =
            mode === "all" || submission.mode === mode;

        return sourceMatch && modeMatch;
    });

    // Stats
    const stats = {
        total: submissions.length,

        attack: submissions.filter(
            (submission) => submission.mode === "attack"
        ).length,

        stealth: submissions.filter(
            (submission) => submission.mode === "stealth"
        ).length,

        today: submissions.filter((submission) => {
            const today = new Date();
            const submissionDate = new Date(submission.createdAt);

            return (
                today.getFullYear() === submissionDate.getFullYear() &&
                today.getMonth() === submissionDate.getMonth() &&
                today.getDate() === submissionDate.getDate()
            );
        }).length,
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-stone-100">

            <AdminHeader />

            <main className="mx-auto max-w-[1600px] px-8 py-8">

                {/* Page heading */}
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Submissions
                    </h1>

                    <p className="mt-2 text-sm text-stone-500">
                        Manage and review all incoming submissions.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-8">
                    <AdminStats stats={stats} />
                </div>

                {/* Filters + Refresh */}
                <div className="mt-8 flex items-center justify-between">
                    <SubmissionFilters
                        source={source}
                        mode={mode}
                        onSourceChange={setSource}
                        onModeChange={setMode}
                    />

                    <button
                        type="button"
                        onClick={fetchSubmissions}
                        disabled={loading}
                        className="rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-xs font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Refreshing..." : "Refresh"}
                    </button>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="mt-8 text-sm text-stone-500">
                        Loading submissions...
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="mt-8 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {/* Workspace */}
                {!loading && !error && (
                    <div className="mt-6">
                        <SubmissionWorkspace
                            submissions={filteredSubmissions}
                            selectedSubmission={selectedSubmission}
                            onSelectSubmission={setSelectedSubmission}
                        />
                    </div>
                )}

            </main>
        </div>
    );
};

export default Admin;