'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getFAQAnswer } from '@/app/faq/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Sparkles, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const formSchema = z.object({
  query: z.string().min(3, 'Please enter a question with at least 3 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function FAQChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: data.query,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    reset();

    try {
      const aiResponse = await getFAQAnswer({ query: data.query });
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        text: aiResponse.answer,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('div > div'); // Target inner scrollable div
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg overflow-hidden animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
      <CardHeader className="bg-primary text-primary-foreground p-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Smart FAQ Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col" style={{ height: '60vh', minHeight: '400px' }}>
        <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'ai' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-secondary text-secondary-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-muted text-muted-foreground">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 justify-start">
               <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              <div className="p-3 rounded-lg bg-secondary text-secondary-foreground rounded-bl-none">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            </div>
          )}
        </ScrollArea>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border-t border-border bg-background flex items-center gap-2">
          <Input
            {...register('query')}
            placeholder="Ask about services, timing, reports..."
            className="flex-grow"
            disabled={isLoading}
            aria-label="Your question"
          />
          <Button type="submit" disabled={isLoading} size="icon" aria-label="Send question">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
        {errors.query && <p className="text-xs text-destructive p-2 text-center bg-destructive/10">{errors.query.message}</p>}
      </CardContent>
    </Card>
  );
}
