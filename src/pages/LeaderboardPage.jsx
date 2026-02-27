import React, { useEffect, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/Advitya26Components/Leaderboard/firebase";
import LeaderboardNavbar from "@/Advitya26Components/Leaderboard/LeaderboardNavbar";
import LeaderboardTable from "@/Advitya26Components/Leaderboard/LeaderboardTable";

const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

export default function LeaderboardPage() {
    const [teams, setTeams] = useState([]);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Subscribe to games config
        const unsubConfig = onSnapshot(
            doc(db, "config", "settings"),
            (snapshot) => {
                if (snapshot.exists()) {
                    setGames(snapshot.data().games || []);
                }
            },
            (err) => {
                console.error("Config snapshot error:", err);
                setError("Failed to load game configuration.");
            }
        );

        // Subscribe to teams
        const unsubTeams = onSnapshot(
            collection(db, "teams"),
            (snapshot) => {
                setTeams(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
                setLoading(false);
            },
            (error) => {
                console.error("Firestore snapshot error:", error);
                setError("Failed to load teams data.");
                setLoading(false);
            }
        );

        return () => { unsubConfig(); unsubTeams(); };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-200 via-white to-blue-100 text-gray-800">
            {/* Google accent bar */}
            <div className="fixed top-0 left-0 right-0 z-[60] flex h-[3px]">
                {GOOGLE_COLORS.map((c, i) => (
                    <div key={i} className="flex-1" style={{ background: c }} />
                ))}
            </div>

            <LeaderboardNavbar />

            <main className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {error && (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                )}

                {/* Page Header */}
                <div className="text-center mb-6 sm:mb-10">
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
                        }}
                    >
                        <p>
                        <span className="text-[#4285F4]">Live </span><span className="text-[#EA4335]"> Leader</span><span className="text-[#FBBC05]">board</span>
                        <span></span>
                        </p>
                    </h1>
                    <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-lg">
                        Advitya&apos;26 · Real-time scores
                        {games.length > 0 && ` across ${games.length} game${games.length > 1 ? "s" : ""}`}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-600 text-xs sm:text-sm font-medium">Live</span>
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <Loader2 className="animate-spin h-10 w-10 text-[#4285F4]" />
                            <p className="text-gray-400 text-sm">Loading scores...</p>
                        </div>
                    </div>
                ) : (
                    <LeaderboardTable teams={teams} games={games} />
                )}
            </main>

            <footer className="border-t border-gray-200 py-4 sm:py-6 text-center text-gray-400 text-xs">
                <div className="flex items-center justify-center gap-2">
                    <span className="flex gap-[3px]">
                        {GOOGLE_COLORS.map((c, i) => (
                            <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                        ))}
                    </span>
                    Advitya&apos;26 · GDG on Campus VIT Bhopal
                </div>
            </footer>
        </div>
    );
}
