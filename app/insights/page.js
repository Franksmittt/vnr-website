'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import InsightsHero from '@/components/InsightsHero';
import FeaturedArticleCard from '@/components/FeaturedArticleCard';
import ArticleCard from '@/components/ArticleCard';
import SubscriptionCTA from '@/components/SubscriptionCTA';
import { allArticles } from '@/lib/articlesData';

const InsightsPage = () => {
    const featuredArticle = allArticles.find(a => a.featured);
    // Ensure regularArticles doesn't include the featured one
    const regularArticles = allArticles.filter(a => !a.featured); 
    
    const categories = ["All", "Taxation", "Business Growth", "Technology", "Compliance", "Legacy Planning"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredArticles = regularArticles
        .filter(article => activeCategory === "All" || article.category === activeCategory)
        .filter(article => {
            const term = searchTerm.toLowerCase();
            const title = article.title || '';
            const excerpt = article.excerpt || ''; 
            return title.toLowerCase().includes(term) || excerpt.toLowerCase().includes(term);
        });

    return (
        <>
            <InsightsHero />
            
            <div className="py-16 sm:py-24 bg-slate-100">
                {featuredArticle && <FeaturedArticleCard article={featuredArticle} />}

                <div className="container mx-auto px-4 mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === cat ? 'bg-blue-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-auto">
                            <input 
                                type="search" 
                                placeholder="Search articles..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-full" 
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <ArticleCard key={article.url} article={article} />
                        ))}
                    </div>
                    
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold text-slate-700">No articles found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your search or category filters.</p>
                        </div>
                    )}
                </div>
            </div>

            <SubscriptionCTA />
        </>
    );
};

export default InsightsPage;