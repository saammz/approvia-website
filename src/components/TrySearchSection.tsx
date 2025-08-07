import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TrySearchSection = () => {
  const sampleQueries = [
    "What's our remote work policy?",
    "Where can I find the brand guidelines?",
    "How do I submit expense reports?",
    "What are the Q4 marketing goals?"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Try Approovia Search</h2>
          <p className="text-xl text-gray-600 dark:text-white">
            Search through our sample marketing team workspace. No signup required.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-200 rounded-3xl overflow-hidden">
            {/* Top Section with Search Input */}
            <div className="bg-gray-200 dark:bg-[#003366] p-12">
              {/* Search Input */}
              <div className="mb-8">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <Input
                    placeholder="Ask anything about the marketing team's documents"
                    className="pl-12 pr-24 py-4 text-lg bg-white dark:bg-[#004B85] border-0 shadow-none h-14"
                  />
                  <Button className="absolute right-2 top-2 px-6 py-2 text-base bg-cyan-500 hover:bg-cyan-600 text-white">
                    Search
                  </Button>
                </div>
              </div>

              {/* Sample Queries */}
              <div>
                <p className="text-lg text-gray-700 mb-6 font-medium dark:text-white">Try these sample queries:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {sampleQueries.map((query, index) => (
                    <div
                      key={index}
                      className="text-left dark:text-white text-gray-800 text-base font-medium cursor-pointer hover:text-gray-900"
                    >
                      {query}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Bottom Section */}
            <div className="bg-gray-100 dark:bg-[#004B85] p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center mt-[80px]">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg dark:text-white">
                Enter a question above to see Approovia Search in action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrySearchSection;