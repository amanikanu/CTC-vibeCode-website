'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Calabar Tech Community Logo" width={32} height={32} className="h-8 w-8 text-primary" />
      <span className="font-headline text-lg font-semibold whitespace-nowrap">Calabar Tech Community</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isInitiativeOpen, setIsInitiativeOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isInitiativeActive = pathname.startsWith('/tis') || pathname.startsWith('/tesi');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[1440px] mx-auto flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/about"
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/about') ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              About
            </Link>
            <Link
              href="/events"
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/events') ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              Events
            </Link>
            <Link
              href="/projects"
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/projects') ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              Projects
            </Link>

            {/* Initiative Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 transition-colors hover:text-primary outline-none cursor-pointer',
                  isInitiativeActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                Initiatives <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/tis" className="w-full cursor-pointer py-2">
                    <div>
                      <div className="font-semibold text-foreground">Tech in School</div>
                      <div className="text-xs text-muted-foreground">Tech awareness for schools</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tesi" className="w-full cursor-pointer py-2">
                    <div>
                      <div className="font-semibold text-foreground">TESI</div>
                      <div className="text-xs text-muted-foreground">Tech Evangelist Skill-Up Initiative</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/team"
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/team') ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className={cn(
                'transition-colors hover:text-primary',
                pathname.startsWith('/contact') ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              Contact
            </Link>
          </nav>
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="border-b pb-4">
                    <Logo />
                  </div>
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith('/about') ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      About
                    </Link>
                    <Link
                      href="/events"
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith('/events') ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      Events
                    </Link>
                    <Link
                      href="/projects"
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith('/projects') ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      Projects
                    </Link>

                    {/* Mobile Initiative Submenu */}
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setIsInitiativeOpen(!isInitiativeOpen)}
                        className={cn(
                          'flex items-center justify-between text-lg font-medium text-left w-full transition-colors hover:text-primary',
                          isInitiativeActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                        )}
                      >
                        Initiatives <ChevronDown className={cn('h-5 w-5 transition-transform', isInitiativeOpen && 'rotate-180')} />
                      </button>
                      {isInitiativeOpen && (
                        <div className="pl-4 flex flex-col gap-3 border-l border-border/60 my-1">
                          <Link
                            href="/tis"
                            onClick={handleLinkClick}
                            className="text-base font-medium text-foreground hover:text-primary"
                          >
                            Tech in School
                          </Link>
                          <Link
                            href="/tesi"
                            onClick={handleLinkClick}
                            className="text-base font-medium text-foreground hover:text-primary"
                          >
                            TESI <span className="text-xs text-muted-foreground font-normal block">(Tech Evangelist Skill-Up Initiative)</span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/team"
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith('/team') ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      Team
                    </Link>
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname.startsWith('/contact') ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

