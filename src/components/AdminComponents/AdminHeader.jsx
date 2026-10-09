import { useNavigate, replace } from "react-router-dom";
import logo from "../../assets/logo.png"

const AdminHeader = () => {

    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_URL
            const response = await fetch(`${baseUrl}/api/admin/logout`,
                {
                    method: "POST",
                    credentials: "include"
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "logout failed")
            }

            navigate("/admin/login", { replace: true })
        } catch (error) {
            console.log("Logout failed", error)
        }
    }
    return (
        <header className="h-20 bg-[#71B5F0]">
            <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-8">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Growthshark"
                    className="w-[120px] object-contain"
                />

                {/* Logout */}
                <button
                    type="button"
                    className="rounded-full bg-[#A8F000] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.25)] active:translate-y-0"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>
        </header>
    );
};

export default AdminHeader;