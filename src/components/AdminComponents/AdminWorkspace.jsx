import SubmissionTable from "./SubmissionTable.jsx";
import SubmissionDetails from "./SubmissionDetails.jsx";

const SubmissionWorkspace = ({
    submissions,
    selectedSubmission,
    onSelectSubmission,
}) => {
    return (
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">

            {/* 75% - Table */}
            <div className="min-w-0">
                <SubmissionTable
                    submissions={submissions}
                    selectedSubmission={selectedSubmission}
                    onSelectSubmission={onSelectSubmission}
                />
            </div>

            {/* 25% - Details */}
            <aside className="min-w-0">
                <div className="sticky top-6">
                    <SubmissionDetails
                        submission={selectedSubmission}
                    />
                </div>
            </aside>

        </section>
    );
};

export default SubmissionWorkspace;