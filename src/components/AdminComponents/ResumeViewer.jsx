import { useState } from "react";

export default function ResumeViewer({ message }) {
    const [isOpen, setIsOpen] = useState(false);

    const resumeUrl = message?.replace("resume: ", "").trim();

    if (!resumeUrl || resumeUrl === message) {
        return null;
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="mt-4 inline-block rounded-md bg-stone-800 px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-stone-700"
            >
                View Resume
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-stone-900">
                        <div className="flex items-center justify-between border-b border-stone-700 p-4">
                            <h2 className="font-semibold text-white">Resume</h2>

                            <div className="flex items-center gap-3">
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-stone-300 hover:text-white"
                                >
                                    Open in new tab
                                </a>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md px-3 py-1 text-xl text-white hover:bg-stone-700"
                                    aria-label="Close resume viewer"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>

                        <iframe
                            src={resumeUrl}
                            title="Candidate Resume"
                            className="min-h-0 w-full flex-1 bg-white"
                        />
                    </div>
                </div>
            )}
        </>
    );
}