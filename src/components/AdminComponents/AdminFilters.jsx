const SubmissionFilters = ({
    // parent owns the state
    source,
    mode,
    onSourceChange,
    onModeChange,
}) => {
    return (
        <section className="flex items-center justify-between gap-4 flex-wrap">

            {/* Source Filter */}
            <select
                value={source}
                onChange={(e) => onSourceChange(e.target.value)}
                className=" rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-200 outline-none transition-colors focus:border-stone-600">
                <option value="all">All Sources</option>
                <option value="home-form-1">Home Form 1</option>
                <option value="home-form-2">Home Form 2</option>
                <option value="career">Career</option>
                <option value="contact">Contact</option>
                <option value="lawyers">Lawyers</option>
                <option value="roofers">Roofers</option>
                <option value="plumbers">Plumbers</option>
                <option value="dental">Dental</option>
            </select>

            {/* Mode Filter */}
            <select
                value={mode}
                onChange={(e) => onModeChange(e.target.value)}
                className=" rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-200 outline-none transition-colors focus:border-stone-600">
                <option value="all">All Modes</option>
                <option value="attack">Attack</option>
                <option value="stealth">Stealth</option>
                <option value="N/A">N/A</option>
            </select>

        </section>
    );
};

export default SubmissionFilters;