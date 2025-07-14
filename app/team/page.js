import TeamHero from '../../components/TeamHero';
import TeamMemberCard from '../../components/TeamMemberCard';
import JoinTeamCTA from '../../components/JoinTeamCTA';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Jannie Venter",
      title: "Co-Founder & Director",
      bio: "With a postgraduate certification in Advanced Taxation, Jannie is a leading expert in tax advisory, helping clients navigate complex fiscal landscapes.",
      imageUrl: "/images/team/jannie-venter.jpg", // Local image path
      profileUrl: "/team/jannie-venter",
      linkedinUrl: "#"
    },
    {
      name: "Charlie Naudé",
      title: "Co-Founder & Director",
      bio: "A former Vice-Chairman of the SAIPA national board, Charlie's expertise in corporate governance shapes the firm's strategic direction.",
      imageUrl: "/images/team/charlie-naude.jpg", // Local image path
      profileUrl: "/team/charlie-naude",
      linkedinUrl: "#"
    },
    {
      name: "Henry Landsberg",
      title: "Accounting & Tax Manager",
      bio: "An award-winning professional, Henry manages our accounting and compliance divisions, ensuring meticulous accuracy and efficiency.",
      imageUrl: "/images/team/henry-landsberg.jpg", // Local image path
      profileUrl: "/team/henry-landsberg",
      linkedinUrl: "#"
    }
  ];

  return (
    <>
      <TeamHero />
      <div className="bg-slate-100 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
      <JoinTeamCTA />
    </>
  );
};

export default TeamPage;