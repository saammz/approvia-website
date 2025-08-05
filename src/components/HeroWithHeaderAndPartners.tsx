import { Button } from "@/components/ui/button";

const HeroWithHeaderAndPartners = () => {
  return (
    <div className="relative">
      {/* Background with curved shape */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-color.png')"
        }}
      ></div>

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/20"
        style={{
          background: 'linear-gradient(90deg, #E8FFFE 0%, #F8FFFF 100%)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Approvia Search"
                className="h-8 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Product</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Demo</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">FAQs</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Contact Us</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-300 text-cyan-500 px-[30px]">
                Login
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Added top padding to account for fixed header */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find answers hidden inside your company docs in seconds
              </h1>
              <p className="text-xl mb-16 leading-relaxed">
                Ask any question. Approovia Search reads your<br />
                knowledge base, emails, and PDFs, then returns a cited<br />
                answer you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8 py-[26px] bg-cyan-500 hover:bg-cyan-600 text-white text-lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-[26px] border-gray-300 text-cyan-500 hover:bg-gray-50 text-lg">
                  See How It Works →
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <img
                src="/hero-right-image.png"
                alt="Approvia Search Workspace Demo"
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Partners and users</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            <div className="flex items-center">
              <img src="/access.png" alt="Access" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center">
              <img src="/nddc.png" alt="NDDC" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center">
              <img src="/nddc.png" alt="NDDC" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center">
              <img src="/sec.png" alt="Securities and Exchange Commission" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroWithHeaderAndPartners;