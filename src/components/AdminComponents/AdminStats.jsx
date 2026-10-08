const AdminStats = ({ stats }) => {
    return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 ">

            {/* Total */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                    Total Submissions
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-stone-100">
                    {stats.total}
                </p>
            </div>

            {/* Attack */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                    Attack
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-stone-100">
                    {stats.attack}
                </p>
            </div>

            {/* Stealth */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                    Stealth
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-stone-100">
                    {stats.stealth}
                </p>
            </div>

            {/* Today */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                    Today
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-stone-100">
                    {stats.today}
                </p>
            </div>

        </section>
    );
};

export default AdminStats;