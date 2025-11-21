// page-layout.tsx

import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate("/sign-in");
    };

    return (
        <div
            className="h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80')", }}
        >
            <div className="bg-white/30 p-10 rounded-2xl shadow-xl flex flex-col items-center gap-6">

                {/* Title */}
                <h1 className="text-3xl font-bold text-white drop-shadow-md">
                    Welcome to <span className="text-black">Tourvisto</span>
                </h1>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="cursor-pointer p-3 bg-white/70 rounded-full hover:bg-white transition shadow-md"
                >
                    <img
                        src="/assets/icons/logout.svg"
                        alt="logout"
                        className="size-7"
                    />
                </button>

                {/* Dashboard Button */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="cursor-pointer px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 shadow-md transition"
                >
                    Dashboard
                </button>

            </div>
        </div>
    );
};

export default PageLayout;
