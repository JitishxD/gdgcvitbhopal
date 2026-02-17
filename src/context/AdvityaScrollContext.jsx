import React, { createContext, useContext, useRef } from "react";

const AdvityaScrollContext = createContext();

export function AdvityaScrollProvider({ children }) {
    const homeRef = useRef(null);
    const gamesRef = useRef(null);
    const faqRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToHome = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const scrollToGames = () => {
        if (gamesRef.current) {
            // Scroll to the end of the card animation container
            // so the ChoosePathCard is fully visible (past the GSAP horizontal scroll)
            const rect = gamesRef.current.getBoundingClientRect();
            const containerBottom = window.scrollY + rect.bottom;
            const targetScroll = containerBottom - window.innerHeight;
            window.scrollTo({ top: Math.max(0, targetScroll), left: 0, behavior: "smooth" });
        }
    };

    const scrollToFaq = () => {
        if (faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AdvityaScrollContext.Provider
            value={{
                homeRef,
                gamesRef,
                faqRef,
                footerRef,
                scrollToHome,
                scrollToGames,
                scrollToFaq,
                scrollToFooter,
            }}
        >
            {children}
        </AdvityaScrollContext.Provider>
    );
}

export function useAdvityaScrollContext() {
    const context = useContext(AdvityaScrollContext);
    if (!context) {
        throw new Error(
            "useAdvityaScrollContext must be used within AdvityaScrollProvider"
        );
    }
    return context;
}
