
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_NAME, LAB_CONTACT_INFO } from '@/lib/constants';
import { Facebook, Linkedin, Instagram } from 'lucide-react'; // Added Instagram

export function Footer() {
  const socialLinks = [
    { href: `https://facebook.com/${LAB_CONTACT_INFO.facebookUsername}`, icon: Facebook, label: "Facebook" },
    { href: `https://instagram.com/${LAB_CONTACT_INFO.instagramUsername}`, icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" }, // Kept LinkedIn as placeholder
  ];

  return (
    <footer className="bg-secondary/50 text-secondary-foreground border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center text-primary hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png" 
                alt={`${SITE_NAME} Logo`}
                width={40} 
                height={40} 
                className="max-h-10 w-auto"
              />
            </Link>
            <p className="text-sm">
              Your trusted partner for accurate and timely diagnostic services.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0,4).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-primary">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{LAB_CONTACT_INFO.address}</p>
              <p>Phone: <a href={`tel:${LAB_CONTACT_INFO.phone}`} className="hover:text-primary hover:underline">{LAB_CONTACT_INFO.phone}</a></p>
              {LAB_CONTACT_INFO.whatsapp && (
                <p>WhatsApp: <a href={`https://wa.me/91${LAB_CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{LAB_CONTACT_INFO.whatsapp}</a></p>
              )}
              <p>Email: <a href={`mailto:${LAB_CONTACT_INFO.email}`} className="hover:text-primary hover:underline">{LAB_CONTACT_INFO.email}</a></p>
            </address>
          </div>
          
          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-primary">Operating Hours</h3>
            <ul className="space-y-1 text-sm">
              {LAB_CONTACT_INFO.hours.map(item => (
                <li key={item.day}><strong>{item.day}:</strong> {item.time}</li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-10 pt-8 border-t border-border/70 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-1">Designed with care for your health.</p>
        </div>
      </div>
    </footer>
  );
}
