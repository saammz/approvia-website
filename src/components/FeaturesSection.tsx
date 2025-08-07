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
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Why teams choose Approovia Search</h2>
          <p className="text-xl text-gray-600 dark:text-white">
            Built for enterprise requirements with consumer-grade simplicity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="rounded-sm p-8 shadow-sm bg-[#F5FFFE] dark:bg-[#003366]" style={{ backgroundColor: '' }}>
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-6 dark:text-white">
                <div className="w-10 h-10 flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded grid grid-cols-2 gap-px">
                      <div className="bg-gray-600 rounded-tl"></div>
                      <div className="bg-gray-600 rounded-tr"></div>
                      <div className="bg-gray-600 rounded-bl"></div>
                      <div className="bg-gray-600 rounded-br"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">{feature.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed text-base dark:text-white">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 dark:text-white text-black rounded-lg text-sm font-medium bg-[#B8FDFF] dark:bg-[#0067A3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;