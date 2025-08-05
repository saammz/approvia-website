const SecuritySection = () => {
  return (
    <section className="py-16 bg-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Enterprise Security You Can Trust</h2>
          <p className="text-lg max-w-4xl mx-auto">
            Your data security is our top priority. Approvia Search meets the highest industry standards
            with zero-trust architecture, end-to-end encryption, and complete data sovereignty.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="text-left">
              <div className="w-8 h-8 mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Zero Data Retention</h3>
              <p className="text-muted-foreground">
                Your documents are processed in memory and never stored on our servers.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;