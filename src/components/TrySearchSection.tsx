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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Try Approvia Search</h2>
          <p className="text-lg">
            Search through our sample marketing team workspace. No signup required.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex space-x-2 mb-6">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <Input
                  placeholder="Ask anything about the marketing team's documents"
                  className="pl-10 py-3 text-lg bg-white border-gray-300"
                />
              </div>
              <Button className="px-8 py-3 text-lg">Search</Button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-4">Try these sample queries:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {sampleQueries.map((query, index) => (
                  <button
                    key={index}
                    className="text-left p-3 bg-white rounded border border-gray-200 hover:bg-gray-50 text-gray-700"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-300 rounded mx-auto mb-3"></div>
              <p className="text-gray-600">
                Enter a question above to see Approvia Search in action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrySearchSection;