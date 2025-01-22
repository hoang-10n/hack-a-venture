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
    name: "Nguyễn Thị Lan",
    userName: "@NguyenThiLan",
    comment:
      "Just started using Plantelligence and I'm already seeing improvements in my crop planning. Great tool!",
    image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
  },
  {
    name: "Trần Văn Minh",
    userName: "@TranVanMinh",
    comment:
      "The resource recommendation feature has saved me a lot on fertilizer costs. Highly recommend this app!",
    image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
  },
  {
    name: "Phạm Quốc Huy",
    userName: "@PhamQuocHuy",
    comment:
      "I was skeptical at first, but the blockchain ledger has made subsidy transactions so transparent. It's a game changer for my farm.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
  },
  {
    name: "Lê Thị Hồng",
    userName: "@LeThiHong",
    comment:
      "Plantelligence has truly simplified how I manage my large farm. The scalability of the platform is impressive.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
  },
  {
    name: "Hoàng Thị Mai",
    userName: "@HoangThiMai",
    comment:
      "Fantastic! Helps me manage my resources more efficiently than ever before.",
    image: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
  },
  {
    name: "Đỗ Văn Nam",
    userName: "@DoVanNam",
    comment:
      "Using this app has enhanced my farming operations beyond my expectations. The management tools are easy to use and very effective.",
    image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover How
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          We Empower Farmers{" "}
        </span>
        in Vietnam
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Our platform leverages AI and Blockchain technologies to address key
        agricultural challenges, enhancing productivity, sustainability, and
        global competitiveness for Vietnamese farmers.
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
                  <AvatarImage alt="" src={image} />
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
