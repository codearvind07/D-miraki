
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import pfp from "@/assets/pfp.jpg"
import Marquee from "../ui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  image: any;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: pfp,
    name: "Rahul Mehta",
    userName: "CEO, TechNova Solutions",
    comment: "DMiraki has transformed our online presence! Their digital marketing strategies helped us reach a larger audience and increased our conversions significantly. Highly professional team!",
  },
  {
    image: pfp,
    name: "Priya Sharma",
    userName: "Marketing Head, Zenith Enterprises",
    comment:
      "We partnered with D Miraki for website development and SEO. Their expertise and commitment to quality are outstanding. We saw a major improvement in our search rankings.",
  },

  {
    image: pfp,
    name: "Amit Verma",
    userName: "Director, Global Tech Solutions",
    comment:
      "DMiraki's IT solutions streamlined our operations and improved our efficiency. Their team is knowledgeable, responsive, and truly understands business needs.",
  },
  {
    image: pfp,
    name: "Neha Kapoor",
    userName: "Founder, StyleAura Fashion",
    comment:
      "Excellent service and innovative digital marketing strategies! Thanks to D Miraki, our brand visibility has grown tremendously in just a few months.",
  },
  {
    image: pfp,
    name: "Sandeep Joshi",
    userName: "Managing Director, NextGen Electronics",
    comment:
      "DMiraki helped us with social media marketing and paid advertising. Their data-driven approach delivered great ROI, and we highly recommend their services!",
  },
  {
    image: pfp,
    name: "Rohit Khanna",
    userName: "Owner, Khanna Constructions",
    comment:
      "From website development to branding, D Miraki handled everything with professionalism and creativity. We are extremely satisfied with the results!",
  },
  {
    image: pfp,
    name: "Vikas Tiwari",
    userName: "Director, FinEdge Consultancy",
    comment:
      "DMiraki's PPC and SEO strategies helped us generate quality leads consistently. Their team understands the market and delivers measurable results.",
  },
  {
    image: pfp,
    name: "Swati Desai",
    userName: "Co-founder, EduGenius Learning",
    comment:
      "They revamped our outdated website and implemented an effective digital strategy. The traffic and engagement on our platform have increased significantly.",
  },
  {
    image: pfp,
    name: "Manish Gupta",
    userName: "COO, Innovate Systems",
    comment:
      "Working with DMiraki was a great experience. Their expertise in software development and IT solutions helped us automate key business processes seamlessly.",
  }
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <div className="flex-col justify-center items-center gap-2 flex pb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent
              from-primary/60 to-primary
              animate-text">
          Testimonials
        </h2>
        <p className="text-[#B3B3B3] text-sm text-center">
        Here's what some awesome partners We've worked with in the past have to say about us!
        </p>
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"> */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        {/*
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div> */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map(
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
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map(({ image, name, userName, comment }: TestimonialProps) => (
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
          ))}
        </Marquee>
      </div>
    </section>
  );
};
