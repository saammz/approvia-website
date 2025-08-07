const SecuritySection = () => {
  const securityFeatures = [
    {
      title: "Zero Data Retention",
      description: "Your documents are processed in memory and never stored on our servers."
    },
    {
      title: "Zero Data Retention",
      description: "Your documents are processed in memory and never stored on our servers."
    },
    {
      title: "Zero Data Retention",
      description: "Your documents are processed in memory and never stored on our servers."
    }
  ];

  return (
    <section className="py-20 dark:bg-[#001D3A] bg-[#F5FFFE]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">Enterprise Security You Can Trust</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed dark:text-white">
            Your data security is our top priority. Approovia Search meets the highest industry standards
            with zero-trust architecture, end-to-end encryption, and complete data sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="rounded-2xl p-8 bg-[#E0FFFE] dark:bg-[#003366]">
              <div className="w-9 h-9 mb-6 dark:text-white dark:bg-white">
                <div className="w-9 h-9 bg-gray-400 dark:text-white rounded grid grid-cols-2 gap-1">
                  <div className="bg-gray-600 dark:bg-white rounded-tl"></div>
                  <div className="bg-gray-600 rounded-tr dark:bg-white"></div>
                  <div className="bg-gray-600 rounded-bl dark:bg-white"></div>
                  <div className="bg-gray-600 rounded-br dark:bg-white"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;