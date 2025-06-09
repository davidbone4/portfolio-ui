import { useState, useEffect } from "react";
import * as Switch from "@radix-ui/react-switch"
import { ArrowDown } from "lucide-react";
import Header from '../components/Header';

const Portfolio = () => {
  const [isEngineer, setIsEngineer] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showHeaderToggle, setShowHeaderToggle] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsEngineer(!isEngineer);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    if (isEngineer) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isEngineer]);

  const currentContent = {
    intro: "Insert Singing verbiage here",
  }

  return <div className=" bg-background text-foreground transition-colors duration-500">
    {/* Header */}
    <Header 
        isEngineer={isEngineer} 
        onToggle={handleToggle}
        showToggle={showHeaderToggle}
      />

    {/* Landing Screen */}
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
          David Bone
        </h2>
        <h2 className="text-6xl md:text-4xl font-bold mb-8 animate-fade-in">
          {isEngineer ? 'Software Engineer' : 'Tenor'}
        </h2>

        <div className={`transition-all duration-600 ease-in-out ${isAnimating
            ? isEngineer
              ? 'animate-slide-left opacity-0'
              : 'animate-slide-right opacity-0'
            : 'opacity-100'
          }`}>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-12 animate-fade-in">
            {currentContent.intro}
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4 relative">
            <span className={`text-lg font-medium transition-colors ${!isEngineer ? 'text-primary' : 'text-muted-foreground'}`}>
              Singer
            </span>
            <Switch.Root
                checked={isEngineer}
                onCheckedChange={handleToggle}
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700 dark:focus-visible:ring-offset-gray-950 scale-125"
              >
                <Switch.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
              </Switch.Root>
            <span className={`text-lg font-medium transition-colors ${isEngineer ? 'text-primary' : 'text-muted-foreground'}`}>
              Engineer
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}

     {/* Portfolio Content */}
     <div className={`transition-all duration-500 ${showPortfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 overflow-hidden">
          {/* Portfolio Grid with Smooth Transitions */}
          <div className="relative">
            <div className={`transition-all duration-600 ease-in-out ${
              isAnimating 
                ? isEngineer 
                  ? 'animate-slide-left opacity-0' 
                  : 'animate-slide-right opacity-0'
                : 'opacity-100'
            }`}>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                {/* {currentContent.cards.map((card, index) => renderCard(card, index))} */}
              </section>
            </div>
          </div>
        </main>
    <footer className="mt-20 border-t bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 David Bone
        </p>
      </div>
    </footer>

    </div>
  </div>
}

export default Portfolio