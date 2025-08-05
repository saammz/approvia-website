const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What our customers say</h2>
          <p className="text-lg">
            Trusted by teams at leading companies worldwide
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Sarah Chen</h3>
            <p className="text-muted-foreground mb-4">Head of Operations, TechCorp</p>
            <blockquote className="text-lg text-foreground italic">
              "Approvia Search has revolutionized how our team finds information. What used to take hours now takes seconds. It's like having a super-smart colleague who knows everything about our company."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;