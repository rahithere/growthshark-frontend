import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/admin/me`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (response.ok) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Checking authentication...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default AdminProtectedRoute;