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
    question: "Why is digital marketing important?",
    answer: "Human beings spend an average of 40 hours a week on the web - twice as much as they did 10 years ago. The internet is, for many, the first and main source of information when looking for something. It heavily influences consumer behavior and serves as a go-to channel for consumer-company interactions. Digital marketing makes it easy for any company to find and convert clients through channels that are vastly used by the majority of the world.",
    value: "item-1",
  },
  {
    question: "Is digital marketing more efficient than traditional (offline) marketing?",
    answer:
      "Marketing comes down to finding your right audience on channels they are most present and more likely to interact and convert on.Digital can serve as a better alternative to offline, but it may also complement your offline campaigns. With digital marketing, you can pinpoint your target audience, capture data easily and tweak your campaigns on the go - offering a lot more flexibility and precision than offline marketing. Return on investment is optimized as you only spend money on those who want to spend money on you- and you can easily retarget and remarket to more qualified audiences.",
    value: "item-2",
  },
  {
    question:
      "Why do should I hire a digital marketing agency to do it for me?",
    answer:
      "Several reasons. Firstly, the expertise and tools that we have allow us to dig much deeper and develop marketing campaigns in Latin America that are completely result-oriented, no time wasted in learning how things work or getting up-to-speed on the latest trends and changes in digital. Secondly, we have one specialist for every major field in digital; ensuring the best of the best are working on every variable that will make the difference in the cost of acquisition of your new clients, your ad spend, and your overall return on investment. Finally, hiring capable marketing people is not cheap - or easy. Training them and aligning them with your objectives, setting up processes for reporting is time consuming - and in digital marketing, if you're not fast, you're left behind, and catching up can be costly. Our Latin American digital marketing team is readily available with solid processes and battle-tested strategies that will align with your goals and deliver exactly what you want and need.",
    value: "item-3",
  },
  {
    question: "How to choose an SEO agency to boost my results?",
    answer: "To select an effective SEO agency, begin by clarifying your business objectives. Whether you need to boost search engine rankings, drive more traffic, or optimize your site for a better user experience, knowing your goals will help you find the right fit. Ensure the agency employs a holistic SEO strategy that covers all aspects, including keyword research, link building, and technical audits. Good communication is vital, so select an SEO agency that provides regular updates and clear reporting. For a reliable partner, consider DMiraki. They are known for their expertise in SEO, with a specialized, dedicated team focused on delivering measurable results and enhancing online performance.",
    value: "item-4",
  },
  {
    question:
      "What are the costs involved in creating a new website?",
    answer:
      "It depends on your requirements, but once we've received your project brief we'll be able to break down the costs involved by deliverable. If you're working to a specific budget we can also suggest ways to stay within it. We're always clear about costs from the outset—you can be sure there'll be no nasty surprises during the project.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
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
          href="/contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
