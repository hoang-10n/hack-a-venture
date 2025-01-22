import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "AI-Powered Crop Management",
    description:
      "Uses AI to monitor crop health through imagery, identifying early signs of issues for preventive measures.",
    image: "/landing/looking-ahead.png",
  },
  {
    title: "Blockchain-Based Financial Transparency",
    description:
      "Integrates blockchain for transparent and secure financial transactions, using smart contracts.",
    image: "/landing/reflecting.png",
  },
  {
    title: "Resource Recommendation Engine",
    description:
      "Analyzes conditions to suggest optimal fertilizers, pesticides, and irrigation techniques.",
    image: "/landing/growth.png",
  },
];

const featureList: string[] = [
  "AI Crop Management",
  "Blockchain Transparency",
  "Pest Monitoring",
  "Resource Engine",
  "Marketplace",
  "Smart Contracts",
  "Resource Management",
  "Sustainable Farming",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
