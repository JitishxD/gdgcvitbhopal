import React from "react";
import DomainNavigation from "./DomainNavigation";
import DomainInfo from "./DomainInfo";
import DomainProjects from "./DomainProjects";
import DomainBlogs from "./DomainBlogs";
import DomainArticles from "./DomainArticles";
import DomainTeam from "./DomainTeam";

function DomainPageLayout({
    domains,
    activeDomain,
    basePath,
    categoryName,
    categoryType,
}) {
    if (!activeDomain) {
        return (
            <div className="min-h-screen bg-background">
                <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
                    <p>Loading domain information...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Secondary Navigation */}
            <DomainNavigation
                domains={domains}
                activeDomainId={activeDomain.id}
                basePath={basePath}
                categoryName={categoryName}
            />

            {/* Domain Content */}
            <div
                className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12 animate-in fade-in slide-in-from-bottom-2 duration-300"
                key={activeDomain.id}
            >
                {/* Domain Info Section */}
                <DomainInfo domain={activeDomain} />

                {/* Projects Section */}
                <DomainProjects
                    projects={activeDomain.projects}
                    domainColor={activeDomain.color}
                />

                {/* Blogs Section */}
                <DomainBlogs
                    blogs={activeDomain.blogs}
                    domainColor={activeDomain.color}
                />

                {/* Articles Section */}
                <DomainArticles
                    articles={activeDomain.articles}
                    domainColor={activeDomain.color}
                />

                {/* Team Section */}
                <DomainTeam
                    team={activeDomain.team}
                    domainColor={activeDomain.color}
                />
            </div>
        </div>
    );
}

export default DomainPageLayout;
