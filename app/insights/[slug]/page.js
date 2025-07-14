import { allArticles } from '@/lib/articlesData';
import ArticleHero from '@/components/ArticleHero';
import ArticleSidebar from '@/components/ArticleSidebar';
import KeyTakeaways from '@/components/KeyTakeaways';
import TableOfContents from '@/components/TableOfContents';
import ShareArticle from '@/components/ShareArticle';

// This function finds the correct article based on the URL slug
function getArticle(slug) {
  // We add the /insights/ prefix to match the URL in the data
  const fullUrl = `/insights/${slug}`;
  return allArticles.find((article) => article.url === fullUrl);
}

export default function SinglePostPage({ params }) {
  const { slug } = params;
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  // Find related posts (excluding the current one)
  const relatedPosts = allArticles.filter(p => p.url !== article.url && p.category === article.category).slice(0, 3);

  return (
    <div className="bg-white">
      <style>{`
        .article-body h3 { font-size: 1.5rem; line-height: 2rem; font-weight: 700; color: #1e293b; margin-top: 2.5em; margin-bottom: 1em; }
        .article-body p { line-height: 1.75; margin-bottom: 1.25em; color: #475569; }
        .article-body p.lead { font-size: 1.125rem; line-height: 1.75rem; color: #334155; }
        .article-body ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.25em; }
        .article-body li { margin-bottom: 0.5em; padding-left: 0.5em; color: #475569; }
        .article-body blockquote { background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 1.5em; margin-bottom: 1.5em; font-style: italic; font-weight: 600; color: #1e3a8a; }
        .article-body a { color: #0d9488; text-decoration: underline; transition: color 0.2s ease-in-out; }
        .article-body a:hover { color: #0f766e; }
      `}</style>
      <main>
        <ArticleHero article={article} />
        <div className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {article.takeaways && <KeyTakeaways takeaways={article.takeaways} />}
                {article.toc && <TableOfContents sections={article.toc} />}
                <article 
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <ShareArticle title={article.title} url={`https://www.vnr.co.za${article.url}`} />
              </div>
              <ArticleSidebar author={article.author} relatedPosts={relatedPosts} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}