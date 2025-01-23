import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question:
      "What are the major sustainability issues faced by Vietnam's agricultural sector?",
    answer:
      "Vietnam faces significant threats from pests and diseases, reliance on traditional farming knowledge, a shortage of agricultural labor force, and financial and resource management issues.",
    value: "item-1",
  },
  {
    question: "How does climate change impact Vietnam's agriculture?",
    answer:
      "Climate change worsens pest and disease threats, leading to substantial crop losses. It also makes traditional farming knowledge less reliable.",
    value: "item-2",
  },
  {
    question:
      "What is the proposed solution to support new farmers in Vietnam?",
    answer:
      "Our solution is a digital platform leveraging AI and Blockchain technologies to provide data-driven tools for crop management and financial transparency.",
    value: "item-3",
  },
  {
    question: "How does AI help in crop management?",
    answer:
      "AI monitors crop health through satellite and drone imagery, identifying early signs of pests, diseases, and environmental stressors, allowing preventive measures to reduce crop losses.",
    value: "item-4",
  },
  {
    question: "What role does Blockchain play in the proposed solution?",
    answer:
      "Blockchain ensures transparency and security in financial transactions, facilitates the disbursement of subsidies and loans, and provides a transparent marketplace for fair pricing and traceable transactions.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
