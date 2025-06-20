'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/contact/action';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: 'default',
      });
      formRef.current?.reset(); // Reset form on success
    } else if (state.status === 'error' && state.message !== "Validation failed. Please check your input.") {
      // Show general error toast if not a validation error already handled by fields
       toast({
        title: "Error",
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} ref={formRef} className="space-y-6 p-8 border border-border rounded-lg shadow-xl bg-card">
      <div>
        <Label htmlFor="name" className="font-medium text-foreground">Full Name</Label>
        <Input type="text" id="name" name="name" required className="mt-1 bg-background focus:border-primary" />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="font-medium text-foreground">Email Address</Label>
        <Input type="email" id="email" name="email" required className="mt-1 bg-background focus:border-primary" />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>
      <div>
        <Label htmlFor="subject" className="font-medium text-foreground">Subject</Label>
        <Input type="text" id="subject" name="subject" required className="mt-1 bg-background focus:border-primary" />
        {state.errors?.subject && <p className="text-sm text-destructive mt-1">{state.errors.subject[0]}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="font-medium text-foreground">Message</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1 bg-background focus:border-primary" />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
