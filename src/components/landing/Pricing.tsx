import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: { benefit: string; available: boolean | string }[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: PopularPlanType.NO,
    price: "$0",
    description: "Basic access to the platform.",
    buttonText: "Get Started",
    benefitList: [
      { benefit: "Crop Condition Diagnosis", available: "20 queries / day" },
      { benefit: "Blockchain Transactions", available: true },
      { benefit: "Community Connectivity", available: true },
      { benefit: "Chat with AI chatbot", available: false },
      { benefit: "Ad-free Experience", available: false },
      { benefit: "Product Suggestions", available: false },
      { benefit: "Advanced Planning Tools", available: false },
      { benefit: "Integration with IoT Systems", available: false },
      { benefit: "Data Visualization Tools", available: false },
      { benefit: "Weather & Crop Predictions", available: false },
      { benefit: "Member Management & Reports", available: false },
      { benefit: "Prioritized Customer Support", available: false },
    ],
  },
  {
    title: "Personal",
    popular: PopularPlanType.NO,
    price: "$10",
    description: "For individual users.",
    buttonText: "Start Free Trial",
    benefitList: [
      { benefit: "Crop Condition Diagnosis", available: "100 queries / day" },
      { benefit: "Blockchain Transactions", available: true },
      { benefit: "Community Connectivity", available: true },
      { benefit: "Chat with AI chatbot", available: "100 queries / day" },
      { benefit: "Ad-free Experience", available: true },
      { benefit: "Product Suggestions", available: true },
      { benefit: "Advanced Planning Tools", available: false },
      { benefit: "Integration with IoT Systems", available: false },
      { benefit: "Data Visualization Tools", available: false },
      { benefit: "Weather & Crop Predictions", available: false },
      { benefit: "Member Management & Reports", available: false },
      { benefit: "Prioritized Customer Support", available: false },
    ],
  },
  {
    title: "Advanced",
    popular: PopularPlanType.YES,
    price: "$15",
    description: "For advanced users.",
    buttonText: "Start Free Trial",
    benefitList: [
      { benefit: "Crop Condition Diagnosis", available: "No limit" },
      { benefit: "Blockchain Transactions", available: true },
      { benefit: "Community Connectivity", available: true },
      { benefit: "Chat with AI chatbot", available: "No limit" },
      { benefit: "Ad-free Experience", available: true },
      { benefit: "Product Suggestions", available: true },
      { benefit: "Advanced Planning Tools", available: true },
      { benefit: "Integration with IoT Systems", available: true },
      { benefit: "Data Visualization Tools", available: true },
      { benefit: "Weather & Crop Predictions", available: true },
      { benefit: "Member Management & Reports", available: false },
      { benefit: "Prioritized Customer Support", available: false },
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: "Contact for more",
    description: "For enterprise users.",
    buttonText: "Contact Us",
    benefitList: [
      { benefit: "Crop Condition Diagnosis", available: "No limit" },
      { benefit: "Blockchain Transactions", available: true },
      { benefit: "Community Connectivity", available: true },
      { benefit: "Chat with AI chatbot", available: "No limit" },
      { benefit: "Ad-free Experience", available: true },
      { benefit: "Product Suggestions", available: true },
      { benefit: "Advanced Planning Tools", available: true },
      { benefit: "Integration with IoT Systems", available: true },
      { benefit: "Data Visualization Tools", available: true },
      { benefit: "Weather & Crop Predictions", available: true },
      { benefit: "Member Management & Reports", available: true },
      { benefit: "Prioritized Customer Support", available: true },
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the plan that best fits your needs and start enjoying our
        services today.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                {pricing.title !== "Enterprise" && (
                  <span className="text-muted-foreground"> /month</span>
                )}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map(({ benefit, available }) => (
                  <span key={benefit} className="flex">
                    {available === true ? (
                      <Check className="text-green-500" />
                    ) : available === false ? (
                      <X className="text-red-500" />
                    ) : (
                      <span className="text-green-500">{available}</span>
                    )}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
