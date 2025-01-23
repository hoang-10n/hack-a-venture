import { Radar } from "lucide-react";
import { JSX } from "react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  role: string;
  description: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Phil Anthropist",
    role: "Some random philanthropist",
    description: "Generous donor supporting various causes.",
  },
  {
    icon: <Radar size={34} />,
    name: "Hank Seebank",
    role: "CEO of HSBC",
    description: "Leader of a prominent bank.",
  },
  {
    icon: <Radar size={34} />,
    name: "Ventura Capitalist",
    role: "Venture Capitalist at Sequoia",
    description: "Invests in innovative startups.",
  },
  {
    icon: <Radar size={34} />,
    name: "Amanda Zone",
    role: "CTO of Amazon",
    description: "Expert in technology and software development.",
  },
  {
    icon: <Radar size={34} />,
    name: "Equity Norton",
    role: "Private Equity Investor at Blackstone",
    description: "Focuses on expanding established businesses.",
  },
  {
    icon: <Radar size={34} />,
    name: "Gail Oogle",
    role: "COO of Google",
    description: "Oversees operations in a growing company.",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-lg lg:text-2xl font-bold mb-8 text-primary">
        Investors and founders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {sponsors.map(({ icon, name, role, description }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col items-center text-center text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">{role}</p>
            <p className="text-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
