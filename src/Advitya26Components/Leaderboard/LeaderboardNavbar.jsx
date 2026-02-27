import React from "react";
import { Link } from "react-router-dom";

export default function LeaderboardNavbar() {
    return (
        <nav className="fixed top-[3px] left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Brand */}
                    <Link to="/advitya" className="flex items-center gap-2 sm:gap-3 group">
                        <img
                            src="/Olympics-Logo.avif"
                            alt="Logo"
                            className="w-20 h-15"
                            />
                        <span className="text-gray-800 font-bold text-base sm:text-lg tracking-tight">
                            Google <span className="text-[#4285F4] font-normal text-xs sm:text-sm hidden sm:inline">Olympics 2.0</span>
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link
                            to="/advitya/leaderboard"
                            className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100"
                        >
                            Leaderboard
                        </Link>
                        <Link
                            to="/advitya/admin"
                            className="text-xs sm:text-sm text-gray-500 hover:text-[#4285F4] transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-blue-50"
                        >
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
