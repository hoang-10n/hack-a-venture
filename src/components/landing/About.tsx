import Image from "next/image";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/landing/icon_text.png"
            alt="icon_text.png"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Plantelligent
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-justify">
                Plantelligence was founded with the vision of revolutionizing
                rural agriculture by integrating artificial intelligence and
                blockchain technology into everyday farming operations. Our
                mission is to empower farmers by providing them with advanced,
                easy-to-use tools that increase productivity, improve
                sustainability, and ensure financial stability. At
                Plantelligence, we are committed to using technology to build a
                better future for farming communities around the world.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
