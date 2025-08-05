const HowItWorksSection = () => {
  const steps = [
    {
      icon: "connect.png",
      title: "Connect",
      description: "Connect your documents, wikis, and help desk.\nWe support popular platforms like Confluence,\nNotion, and more."
    },
    {
      icon: "ask.png",
      title: "Ask",
      description: "Ask questions in natural language and get\ninstant answers from your knowledge base\nwithout any complicated setup."
    },
    {
      icon: "answers.png",
      title: "Get Answers",
      description: "Receive accurate, source-linked answers in\nseconds. No more hunting through documents\nfor the information you need."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How Approvia Search Works</h2>
          <p className="text-lg">
            Get up and running in minutes. It's that simple.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-5">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src={`/${step.icon}`}
                  alt={step.title}
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="whitespace-pre-line leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;