import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="mb-12 text-center animate-fade-in" style={{animationFillMode: 'backwards', animationDelay: '0.2s'}}>
      <div className="flex justify-center items-center mb-4">
        {Icon && <Icon className="h-12 w-12 text-primary mr-4" />}
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{title}</h1>
      </div>
      {description && <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>}
    </div>
  );
}
