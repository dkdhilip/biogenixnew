import { PageHeader } from '@/components/shared/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TEST_PREPARATION_GUIDELINES } from '@/lib/constants';
import { ClipboardCheck } from 'lucide-react';

export default function TestPreparationPage() {
  return (
    <div>
      <PageHeader
        title="Test Preparation Guide"
        description="Proper preparation is key to accurate test results. Please follow these guidelines carefully. If you have any questions, consult your doctor or contact us."
        icon={ClipboardCheck}
      />
      <Card className="shadow-lg animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">General Preparation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {TEST_PREPARATION_GUIDELINES.map((guideline, index) => (
              <AccordionItem key={guideline.id} value={`item-${index + 1}`} className="border border-border rounded-lg shadow-sm bg-background hover:bg-secondary/30 transition-colors">
                <AccordionTrigger className="p-6 text-lg font-medium text-primary hover:text-accent-foreground">
                  <div className="flex items-center gap-3">
                    <guideline.icon className="h-6 w-6 text-primary" />
                    {guideline.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    {guideline.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-sm text-muted-foreground">
            <strong>Important:</strong> These are general guidelines. Specific tests may have different or additional preparation instructions. Always follow the instructions provided by your doctor or for your specific test. If in doubt, please contact us prior to your appointment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
