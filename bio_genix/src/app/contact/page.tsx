
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/shared/ContactForm';
import { LAB_CONTACT_INFO } from '@/lib/constants';
import { Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const { name, address, phone, whatsapp, email, hours, mapPinIcon: MapPinIcon, phoneIcon: PhoneIcon, emailIcon: EmailIcon, mapPlaceholderImage, mapPlaceholderAiHint } = LAB_CONTACT_INFO;

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We're here to help. Reach out with any questions or to schedule an appointment. You can find our location and contact details below."
        icon={Mail}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map Section */}
        <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" /> Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-lg font-semibold text-foreground">{name}</p>
              <p className="text-muted-foreground">{address}</p>
              {/* Removed image container block */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-primary hover:text-accent-foreground hover:underline"
              >
                Get Directions
              </a>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" /> Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p><a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">{phone}</a> (Phone)</p>
                {whatsapp && (
                  <p className="mt-1">
                    <a href={`https://wa.me/91${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {whatsapp}
                    </a> (WhatsApp)
                  </p>
                )}
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                  <EmailIcon className="h-5 w-5" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">{email}</a>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary flex items-center gap-2">
                <Clock className="h-6 w-6" /> Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-muted-foreground">
                {hours.map(item => (
                  <li key={item.day}><strong>{item.day}:</strong> {item.time}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'backwards'}}>
          <h2 className="text-3xl font-bold font-headline text-primary mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
