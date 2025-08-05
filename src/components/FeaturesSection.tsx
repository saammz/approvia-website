const FeaturesSection = () => {
  const features = [
    {
      title: "Enterprise-grade security",
      description: "SOC 2 Type II certified with SSO, tenant isolation, and zero data retention. Your documents never leave your secure environment.",
      tags: ["SOC 2 Type II", "SSO Integration", "Tenant Isolation", "SOC 2 Type II"]
    },
    {
      title: "< 2 sec responses",
      description: "Lightning-fast RAG architecture with optimized vector indexes delivers answers faster than you can think of follow-up questions.",
      tags: ["Vector Search", "Real-time Processing", "Smart Caching", "Parallel Queries"]
    },
    {
      title: "Source-linked citations",
      description: "Every answer includes inline footnotes linking directly to the source document, page, and even specific paragraphs.",
      tags: ["Inline Citations", "Direct Links", "Page Numbers", "Confidence Scores"]
    },
    {
      title: "Smart summarisation",
      description: "Advanced AI synthesizes information across multiple files, creates tables, lists, and structured responses from unstructured data.",
      tags: ["Multi-file Synthesis", "Table Generation", "Smart Lists", "Context Awareness"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why teams choose Approvia Search</h2>
          <p className="text-lg">
            Built for enterprise requirements with consumer-grade simplicity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex-shrink-0 mt-1">
                  <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;