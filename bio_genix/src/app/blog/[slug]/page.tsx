import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, type BlogPost } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 animate-fade-in" style={{animationFillMode: 'backwards'}}>
        <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
        {post.image && (
          <div className="relative h-72 w-full">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.dataAiHint}
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
               <post.icon className="h-10 w-10 text-white opacity-90" />
             </div>
          </div>
        )}
        <CardHeader className="pt-6">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary mb-3">{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><UserCircle className="h-4 w-4" /> By {post.author}</span>
            <span className="flex items-center gap-1.5"><Tag className="h-4 w-4" /> {post.category}</span>
          </div>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent-foreground hover:prose-a:text-primary prose-strong:text-foreground">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>

       <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/contact">
            Have Questions? Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | LabLink Blog`,
    description: post.excerpt,
  };
}
