import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Approovia Search integrate with our existing tools?",
      answer: "Approovia Search integrates seamlessly with popular platforms like Confluence, Notion, SharePoint, Google Drive, and many more through our robust API connections."
    },
    {
      question: "Is our data secure with Approovia Search?",
      answer: "Yes, we take security seriously. We use enterprise-grade encryption, comply with SOC 2 Type II standards, and never store your actual data on our servers."
    },
    {
      question: "How accurate are the search results?",
      answer: "Our AI-powered search delivers 99% accuracy by understanding context and meaning, not just keywords. Every answer includes source citations for verification."
    },
    {
      question: "Can we customize the search experience?",
      answer: "Absolutely! Enterprise plans include custom AI model training, branded interfaces, and tailored search algorithms for your specific use case."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, priority support for Professional users, and 24/7 dedicated support for Enterprise customers."
    }
  ];

  return (
    <section className="py-16 bg-section-bg dark:bg-[#003366]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg">
            Everything you need to know about Approovia Search
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;