import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';
import { Menu, X, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface HeaderProps {
  isEngineer: boolean;
  onToggle: () => void;
  showToggle: boolean;
}

const Header: React.FC<HeaderProps> = ({ isEngineer, onToggle, showToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const singerPages = [
    { title: 'About My Voice', id: 'singer-bio' },
    { title: 'Recent Performance', id: 'singer-performance' },
    { title: 'Performance Gallery', id: 'singer-gallery' },
    { title: 'Recent Awards', id: 'singer-achievements' },
    { title: 'Master Class', id: 'singer-masterclass' },
    { title: 'Upcoming Performances', id: 'singer-upcoming' }
  ];

  const engineerPages = [
    { title: 'Technical Expertise', id: 'engineer-bio' },
    { title: 'E-Commerce Platform', id: 'engineer-ecommerce' },
    { title: 'AI Chat Application', id: 'engineer-ai-chat' },
    { title: 'Core Technologies', id: 'engineer-skills' },
    { title: 'Tech Talk', id: 'engineer-talk' },
    { title: 'Open Source Contributions', id: 'engineer-opensource' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Hamburger menu and title */}
          <div className="flex items-center space-x-4">
            <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <Dialog.Trigger asChild>
                <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white dark:bg-gray-900 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                  <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
                      Portfolio Navigation
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400">
                      Explore different sections of my portfolio
                    </Dialog.Description>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3 text-blue-600 dark:text-blue-400">Singer Portfolio</h3>
                      <div className="space-y-2">
                        {singerPages.map((page) => (
                          <button
                            key={page.id}
                            onClick={() => {
                              window.location.href = `/portfolio/${page.id}`;
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            {page.title}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3 text-green-600 dark:text-green-400">Engineer Portfolio</h3>
                      <div className="space-y-2">
                        {engineerPages.map((page) => (
                          <button
                            key={page.id}
                            onClick={() => {
                              window.location.href = `/portfolio/${page.id}`;
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            {page.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-blue-400 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <h1 className="text-xl font-bold">
              {isEngineer ? 'Software Engineer' : 'Classical Singer'}
            </h1>
          </div>

          {/* Center - Toggle (only when scrolled) */}
          {showToggle && (
            <div className="flex items-center space-x-4">
              <span className={`text-sm font-medium transition-colors ${!isEngineer ? 'text-blue-600' : 'text-gray-500'}`}>
                Singer
              </span>
              <Switch.Root
                checked={isEngineer}
                onCheckedChange={onToggle}
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700 dark:focus-visible:ring-offset-gray-950"
              >
                <Switch.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
              </Switch.Root>
              <span className={`text-sm font-medium transition-colors ${isEngineer ? 'text-blue-600' : 'text-gray-500'}`}>
                Engineer
              </span>
            </div>
          )}

          {/* Right side - Social media icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;