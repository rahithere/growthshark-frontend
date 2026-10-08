const SubmissionDetails = ({ submission }) => {

    // if no submission is selected
    if (!submission) {
        return (
            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <div className="flex min-h-96 items-center justify-center text-center">
                    <div>
                        <p className="text-sm font-medium text-stone-300">
                            No submission selected
                        </p>

                        <p className="mt-2 text-sm text-stone-500">
                            Select a submission from the table to view its details.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-stone-800 bg-stone-900">

            {/* Header */}
            <div className="border-b border-stone-800 p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                            Submission
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-stone-100">
                            {submission.fullName}
                        </h2>
                    </div>

                    {/* Mode */}
                    {submission.mode === "attack" && (
                        <span className="shrink-0 rounded-full bg-[#A8F000] px-3 py-1 text-xs font-bold uppercase text-black">
                            Attack
                        </span>
                    )}

                    {submission.mode === "stealth" && (
                        <span className="shrink-0 rounded-full bg-[#71B5F0] px-3 py-1 text-xs font-bold uppercase text-black">
                            Stealth
                        </span>
                    )}
                </div>
            </div>

            {/* Details */}
            <div className="max-h-[calc(100vh-220px)] overflow-y-auto p-6">

                {/* Contact */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        Contact
                    </p>

                    <div className="mt-4 space-y-4">

                        <DetailItem
                            label="Full Name"
                            value={submission.fullName}
                        />

                        <DetailItem
                            label="Email"
                            value={submission.email}
                        />

                        {submission.phone !== "N/A" && (
                            <DetailItem
                                label="Phone"
                                value={submission.phone}
                            />
                        )}

                    </div>
                </div>

                {/* Business */}
                {(submission.website || submission.service) !== "N/A" && (
                    <div className="mt-8 border-t border-stone-800 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                            Business
                        </p>

                        <div className="mt-4 space-y-4">

                            {submission.website && (
                                <DetailItem
                                    label="Website"
                                    value={submission.website}
                                />
                            )}

                            {submission.service && (
                                <DetailItem
                                    label="Service"
                                    value={submission.service}
                                />
                            )}

                        </div>
                    </div>
                )}

                {/* if source career then Message resume link if no then normal message  */}
                {submission.source === "career" ? (
                    submission.message && (
                        <div className="mt-8 border-t border-stone-800 pt-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                Resume
                            </p>

                            <a
                                href={submission.message.replace("resume: ", "")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block rounded-md bg-stone-800 px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-stone-700"
                            >
                                Resume
                            </a>
                        </div>
                    )
                ) : (
                    submission.message && (
                        <div className="mt-8 border-t border-stone-800 pt-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                Message
                            </p>

                            <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-stone-300">
                                {submission.message}
                            </p>
                        </div>
                    )
                )}

                {/* Metadata */}
                <div className="mt-8 border-t border-stone-800 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        Metadata
                    </p>

                    <div className="mt-4 space-y-4">

                        <DetailItem
                            label="Source"
                            value={submission.source}
                        />

                        <DetailItem
                            label="Submitted"
                            value={new Date(
                                submission.createdAt
                            ).toLocaleString()}
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};


const DetailItem = ({ label, value }) => {
    return (
        <div>
            <p className="text-xs text-stone-500">
                {label}
            </p>

            <p className="mt-1 break-words text-sm text-stone-200">
                {value || "—"}
            </p>
        </div>
    );
};


export default SubmissionDetails;