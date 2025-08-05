import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per user/month",
      features: [
        "Up to 1,000 documents",
        "Basic search functionality",
        "Email support",
        "Standard security"
      ],
      cta: "Start Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$59",
      period: "per user/month",
      features: [
        "Up to 10,000 documents",
        "Advanced AI search",
        "Priority support",
        "SSO integration",
        "Analytics dashboard"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per user/month",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "24/7 dedicated support",
        "Advanced security",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-lg">
            Choose the plan that's right for your team
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-card border rounded-lg p-8 text-center relative ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;