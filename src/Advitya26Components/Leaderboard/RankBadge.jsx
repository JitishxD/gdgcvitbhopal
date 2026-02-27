import React from "react";

const medals = {
    1: { emoji: "🥇", bg: "bg-yellow-100", border: "border-yellow-300", text: "text-yellow-700" },
    2: { emoji: "🥈", bg: "bg-gray-100", border: "border-gray-300", text: "text-gray-600" },
    3: { emoji: "🥉", bg: "bg-amber-100", border: "border-amber-300", text: "text-amber-700" },
};

export default function RankBadge({ rank }) {
    const medal = medals[rank];

    if (medal) {
        return (
            <span className={`inline-flex items-center gap-0.5 px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-sm ${medal.bg} ${medal.border} ${medal.text} border`}>
                <span className="text-xs sm:text-lg leading-none">{medal.emoji}</span>
                {rank}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gray-100 text-gray-500 font-semibold text-[9px] sm:text-sm">
            {rank}
        </span>
    );
}

export function getRankRowClass(rank) {
    switch (rank) {
        case 1: return "bg-yellow-50/60 border-l-4 border-l-yellow-400";
        case 2: return "bg-gray-50/60 border-l-4 border-l-gray-300";
        case 3: return "bg-amber-50/60 border-l-4 border-l-amber-400";
        default: return "border-l-4 border-l-transparent";
    }
}
