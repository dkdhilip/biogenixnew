import { PageHeader } from '@/components/shared/PageHeader';
import { FAQChatbot } from '@/components/shared/FAQChatbot';
import { MessageCircleQuestion } from 'lucide-react';

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        title="Smart FAQ"
        description="Have questions about our lab services, test timings, or how to get your reports? Ask our AI-powered assistant for instant answers."
        icon={MessageCircleQuestion}
      />
      <FAQChatbot />
    </div>
  );
}
