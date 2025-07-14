import { teamMembers } from '@/lib/teamData'; // Corrected import path
import TeamMemberHero from '@/components/TeamMemberHero'; // Corrected import path
import TeamMemberSidebar from '@/components/TeamMemberSidebar'; // Corrected import path

// This function finds the correct team member based on the URL
function getMember(slug) {
  return teamMembers.find((member) => member.slug === slug);
}

export default function TeamMemberPage({ params }) {
  // The `params` object contains the slug from the URL
  const { slug } = params;
  const member = getMember(slug);

  // If no member is found for the slug, show a "not found" message
  if (!member) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Team Member Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <style>{`
        .article-body h3 { font-size: 1.5rem; line-height: 2rem; font-weight: 700; color: #1e293b; margin-top: 2.5em; margin-bottom: 1em; }
        .article-body p { line-height: 1.75; margin-bottom: 1.25em; color: #475569; }
        .article-body ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.25em; }
        .article-body li { margin-bottom: 0.5em; padding-left: 0.5em; color: #475569; }
      `}</style>
      <main>
        <TeamMemberHero member={member} />
        
        <div className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article 
                className="lg:col-span-2 article-body"
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />
              <TeamMemberSidebar member={member} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};