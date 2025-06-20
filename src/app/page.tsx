
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { NAV_LINKS, SITE_NAME, LAB_CONTACT_INFO } from '@/lib/constants';
import { ArrowRight, CheckCircle, ShieldCheck, Users, Stethoscope, Activity, Leaf, MapPin } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

function FeatureCard({ title, description, href, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-muted-foreground mb-4">{description}</CardDescription>
        <Button variant="link" asChild className="p-0 text-primary hover:text-accent-foreground">
          <Link href={href}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const features = [
    { title: 'Our Services', description: 'Explore a wide range of diagnostic tests and services.', href: '/services', icon: NAV_LINKS.find(link => link.href === '/services')?.icon || Users },
    { title: 'Test Preparation', description: 'Find out how to prepare for your upcoming lab tests.', href: '/preparation', icon: NAV_LINKS.find(link => link.href === '/preparation')?.icon || Users },
    { title: 'Health Blog', description: 'Read articles on health, wellness, and lab testing.', href: '/blog', icon: NAV_LINKS.find(link => link.href === '/blog')?.icon || Users },
  ];

  const whyChooseUsItems = [
    { title: 'Accurate Results', description: 'State-of-the-art technology for precise diagnostics.', icon: CheckCircle },
    { title: 'Experienced Staff', description: 'Highly qualified professionals dedicated to your care.', icon: Users },
    { title: 'Patient Confidentiality', description: 'Your privacy and data security are our top priorities.', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 rounded-lg overflow-hidden animate-fade-in" style={{animationFillMode: 'backwards'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground mb-6">
            Welcome to <span className="text-accent-foreground">{SITE_NAME}</span>
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Your trusted partner for comprehensive diagnostic services and health insights.
          </p>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg">
            <Link href="/services">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="animate-fade-in" style={{animationFillMode: 'backwards', animationDelay: '0.2s'}}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-primary mb-12">
          Discover What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
             <div key={feature.title} className="animate-fade-in" style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'backwards'}}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card rounded-lg shadow-lg animate-fade-in" style={{animationFillMode: 'backwards', animationDelay: '0.4s'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-primary mb-12">
            Why Choose {SITE_NAME}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {whyChooseUsItems.map((item, index) => (
              <div key={item.title} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'backwards'}}>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 animate-fade-in" style={{animationFillMode: 'backwards', animationDelay: '0.6s'}}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule an appointment or contact us for any inquiries. We are here to help you on your health journey.
        </p>
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 transition-transform hover:scale-105 shadow-lg">
              <Link href="/preparation">Test Preparation Guide</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
