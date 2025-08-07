const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">What our customers say</h2>
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-xl font-bold text-gray-900 ml-2 dark:text-white">4.9/5</span>
            <span className="text-lg text-gray-600 ml-1 dark:text-white">from 200+ reviews</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 dark:bg-[#0081B8] rounded-2xl p-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl dark:text-white">SC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sarah Chen</h3>
                <p className="text-gray-600 dark:text-white">Head Of Operations At TechFlow</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-center mb-6">
              <p className="text-xl text-gray-900 leading-relaxed mb-4 dark:text-white">
                "Cut our document search time by 72%.<br />
                Approovia Search finds answers in seconds that<br />
                used to take hours."
              </p>
              <footer className="text-lg font-semibold text-gray-700 dark:text-white">
                SC
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;