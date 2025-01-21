import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Emily Clarke",
    userName: "@EmilyClarkeAI",
    comment: "Just started using Plantelligence and I'm already seeing improvements in my crop planning. Great tool!",
    image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
  },
  {
    name: "Lucas Brown",
    userName: "@LucasTechGuru",
    comment: "The resource recommendation feature has saved me a lot on fertilizer costs. Highly recommend this app!",
    image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg"
  },
  {
    name: "Jack Roberts",
    userName: "@JackInTheField",
    comment: "I was skeptical at first, but the blockchain ledger has made subsidy transactions so transparent. It's a game changer for my farm.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
  },
  {
    name: "Isabella Martin",
    userName: "@BellaFarms",
    comment: "Plantelligence has truly simplified how I manage my large farm. The scalability of the platform is impressive.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg"
  },
  {
    name: "Mia Wong",
    userName: "@GreenThumbMia",
    comment: "Fantastic! Helps me manage my resources more efficiently than ever before.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg"
  },
  {
    name: "Noah Lee",
    userName: "@FarmerNoah",
    comment: "Using this app has enhanced my farming operations beyond my expectations. The management tools are easy to use and very effective.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
  },
]

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
