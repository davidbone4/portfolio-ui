import { useState } from "react";
import { Switch } from "@radix-ui/react-switch"
import { ArrowDown } from "lucide-react";

const Portfolio = () => {
    const [isEngineer, setIsEngineer] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsEngineer(!isEngineer);
          setIsAnimating(false);
        }, 600);
      };

    const currentContent = {
        intro: "Insert Singing verbiage here",
    }

    return  <div className=" bg-background text-foreground transition-colors duration-500">
    {/* Header */}
    {/* <Header isEngineer={isEngineer} /> */}

    {/* Landing Screen */}
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
          David Bone
        </h2>
        <h2 className="text-6xl md:text-4xl font-bold mb-8 animate-fade-in">
          {isEngineer ? 'Software Engineer' : 'Tenor'}
        </h2>
        
        <div className={`transition-all duration-600 ease-in-out ${
          isAnimating 
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
            <Switch
              checked={isEngineer}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-primary scale-125"
            />
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
          
    </div>
}

export default Portfolio