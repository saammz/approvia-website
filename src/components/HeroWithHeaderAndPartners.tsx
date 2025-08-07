import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

const HeroWithHeaderAndPartners = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'dark':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      default: // system
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="relative">
      {/* Background with curved shape */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: theme === 'dark' ? "url('/bg-color-dark.png')" : "url('/bg-color.png')"
        }}
      ></div>

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/20"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(90deg, #0c3f54 0%, #04061d 100%)'
            : 'linear-gradient(90deg, #E8FFFE 0%, #F8FFFF 100%)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <img
                src={theme === 'dark' ? "/logo-white.png" : "/logo.png"}
                alt="Approovia Search"
                className="h-8 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8 dark:text-white">
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-800 font-medium">Product</a>
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-800 font-medium">Demo</a>
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-800 font-medium">Pricing</a>
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-800 font-medium">FAQs</a>
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-800 font-medium">Contact Us</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-300 text-cyan-500 px-[30px]">
                Login
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Start Free Trial
              </Button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
                title={`Current theme: ${theme}`}
              >
                {getThemeIcon()}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Added top padding to account for fixed header */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl dark:text-white lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
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
                src={theme === 'dark' ? "/right-image-dark.png" : "/hero-right-image.png"}
                alt="Approovia Search Workspace Demo"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">Partners and users</h2>
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