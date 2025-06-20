
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAV_LINKS, SITE_NAME, LAB_CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Phone, MapPin, MessageSquare } from 'lucide-react';

export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-background/60'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center text-primary hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo.png"
            alt={`${SITE_NAME} Logo`}
            width={50}
            height={50}
            className="max-h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation & Contact */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Button key={link.label} variant="ghost" asChild>
                <Link href={link.href} className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
          {/* Desktop Contact Info */}
          <div className="flex items-center space-x-4 pl-4 border-l border-border/50 ml-2">
            <a href={`tel:${LAB_CONTACT_INFO.phone}`} className="flex items-center text-sm text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-1.5 text-primary" />
              {LAB_CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-0 flex flex-col">
              <div className="flex justify-between items-center p-6 pb-4 border-b border-border/50">
                    <Link href="/" className="flex items-center text-primary hover:opacity-90 transition-opacity">
                       <Image
                        src="/images/logo.png"
                        alt={`${SITE_NAME} Logo`}
                        width={40}
                        height={40}
                        className="max-h-12 w-auto"
                        priority
                      />
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6 text-primary" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-6">
                  {NAV_LINKS.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-md text-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-auto">
                    <div className="p-6 space-y-3 border-t border-border/50">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact Info</h3>
                        <div className="flex items-start gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-foreground">{LAB_CONTACT_INFO.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-primary shrink-0" />
                            <a href={`tel:${LAB_CONTACT_INFO.phone}`} className="text-foreground hover:text-primary transition-colors">{LAB_CONTACT_INFO.phone}</a>
                        </div>
                        {LAB_CONTACT_INFO.whatsapp && (
                        <div className="flex items-center gap-2 text-sm">
                            <MessageSquare className="h-4 w-4 text-primary shrink-0" />
                            <a href={`https://wa.me/91${LAB_CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                            {LAB_CONTACT_INFO.whatsapp} (WhatsApp)
                            </a>
                        </div>
                        )}
                    </div>
                    <div className="p-6 border-t border-border/50">
                        <p className="text-center text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} {SITE_NAME}.
                        </p>
                    </div>
                </div>
              {/* Extraneous closing div removed from here */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
