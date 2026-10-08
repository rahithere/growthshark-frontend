const SubmissionTable = ({
    submissions,
    selectedSubmission,
    onSelectSubmission,
}) => {
    return (
        <div className="overflow-x-hidden rounded-2xl border border-stone-800 bg-stone-900">

            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr_1fr_auto] items-center gap-4 border-b border-stone-800 px-6 py-4 min-w-[700px]">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Name
                </p>

                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Email
                </p>

                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Source
                </p>

                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Mode
                </p>

                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Date
                </p>

                <span />
            </div>

            {/* Table Body */}
            <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900">
                {submissions.length === 0 ? (
                    <div className="flex min-h-48 items-center justify-center">
                        <p className="text-sm text-stone-500">
                            No submissions found
                        </p>
                    </div>
                ) : (
                    submissions.map((submission) => {
                        const isSelected =
                            selectedSubmission?._id === submission._id;

                        return (
                            <div
                                key={submission._id}
                                className={`grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr_1fr_auto] items-center gap-4 border-b border-stone-800 px-6 py-4 transition-colors last:border-b-0 ${isSelected
                                    ? "bg-stone-800/60"
                                    : "hover:bg-stone-800/40"
                                    }`}
                            >
                                {/* Name */}
                                <p className="truncate text-sm font-medium text-stone-200">
                                    {submission.fullName}
                                </p>

                                {/* Email */}
                                <p className="truncate text-sm text-stone-400">
                                    {submission.email}
                                </p>

                                {/* Source */}
                                <p className="truncate text-sm text-stone-400">
                                    {submission.source}
                                </p>

                                {/* Mode */}
                                <div>
                                    {submission.mode === "attack" && (
                                        <span className="rounded-full bg-[#A8F000] px-3 py-1 text-xs font-bold uppercase text-black">
                                            Attack
                                        </span>
                                    )}

                                    {submission.mode === "stealth" && (
                                        <span className="rounded-full bg-[#71B5F0] px-3 py-1 text-xs font-bold uppercase text-black">
                                            Stealth
                                        </span>
                                    )}

                                    {submission.mode === "N/A" && (
                                        // <span className="text-sm text-stone-600">
                                        //     —
                                        // </span>
                                        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase text-black">
                                            Default
                                        </span>
                                    )}
                                </div>

                                {/* Date */}
                                <p className="text-sm text-stone-500">
                                    {new Date(submission.createdAt).toLocaleDateString()}
                                </p>

                                {/* View */}
                                <button
                                    type="button"
                                    onClick={() => onSelectSubmission(submission)}
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-700 hover:text-stone-100"
                                >
                                    View
                                </button>
                            </div>
                        );
                    })
                )}
            </div>

        </div>
    );
};

export default SubmissionTable;