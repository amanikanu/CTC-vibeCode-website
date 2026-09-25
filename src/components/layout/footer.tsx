import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
         <Link href="/">
           <Image src="/logo.png" alt="Calabar Tech Community Logo" width={40} height={40} className="h-10 w-10" />
         </Link>
          <span>© {new Date().getFullYear()} Calabar Tech Community. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/tech_calabar" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://facebook.com/techCalabar" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/company/calabar-tech-community/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
