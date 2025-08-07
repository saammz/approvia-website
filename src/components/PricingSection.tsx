import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$150",
      period: "/ month",
      savings: "save $45 on the annual plan",
      features: {
        "Queries per month": "100",
        "Data sources": "5",
        "Basic integrations": "2",
        "Email Support": true,
        "Standard Security": true
      }
    },
    {
      name: "Growth",
      price: "$350",
      period: "/ month",
      savings: "save $55 on the annual plan",
      popular: true,
      features: {
        "Queries per month": "Unlimited",
        "Data sources": "20",
        "Basic integrations": "10",
        "Email Support": true,
        "Standard Security": true
      }
    },
    {
      name: "Enterprise",
      price: "$500",
      period: "/ month",
      savings: "save $150 on the annual plan",
      discount: "-10%",
      features: {
        "Queries per month": "Unlimited",
        "Data sources": "Unlimited",
        "Basic integrations": "50",
        "Email Support": true,
        "Standard Security": true
      }
    }
  ];

  const usageFeatures = [
    "Queries per month",
    "Data sources",
    "Basic integrations",
    "Email Support",
    "Standard Security"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-white">
            Start free, scale as you grow. No hidden fees, no per-query charges.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gray-100 dark:bg-[#004B85] rounded-lg p-1 flex w-fit">
            <button className="px-6 py-2 text-gray-900 bg-white rounded-md font-medium shadow-sm">
              Annually
            </button>
            <button className="px-6 py-2 text-gray-600 font-medium dark:text-white">
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`border-2 dark:bg-[#004B85] dark:border-none rounded-xl p-6 text-center relative ${plan.popular ? 'border-cyan-400' : 'border-gray-200'}`}>
              {plan.discount && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {plan.discount}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4 dark:text-white">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-lg text-gray-600 dark:text-white">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm dark:text-white">{plan.savings}</p>
              <Button className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg">
                Buy Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Usage Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 dark:text-white">Usage</h3>
          <div className="bg-white">
            {usageFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 dark:bg-[#010817] p-4 border-b border-gray-200 last:border-b-0">
                <div className="text-gray-600 font-medium dark:text-white">{feature}</div>
                {plans.map((plan, planIndex) => (
                  <div key={planIndex} className="text-center dark:text-white">
                    {typeof plan.features[feature] === 'boolean' ? (
                      <span className="text-green-600 text-xl">✓</span>
                    ) : (
                      <span className="text-gray-900 font-medium dark:text-white">{plan.features[feature]}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;