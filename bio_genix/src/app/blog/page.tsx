import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS, type BlogPost } from '@/lib/constants';
import { Newspaper, ArrowRight, CalendarDays, UserCircle, Tag } from 'lucide-react';

function BlogCard({ post, index }: { post: BlogPost, index: number }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in h-full flex flex-col" style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'backwards'}}>
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.dataAiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <div className="absolute bottom-4 left-4">
             <post.icon className="h-8 w-8 text-white opacity-80" />
           </div>
        </Link>
      )}
      <CardHeader className="pt-4">
        <CardTitle className="text-xl font-headline text-primary hover:text-accent-foreground transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground flex items-center space-x-4 mt-1">
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><UserCircle className="h-3.5 w-3.5" /> {post.author}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="flex items-center gap-1 text-xs text-accent-foreground bg-accent/20 px-2 py-1 rounded-full">
            <Tag className="h-3.5 w-3.5" /> {post.category}
        </span>
        <Button variant="link" asChild className="text-primary hover:text-accent-foreground p-0">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="LabLink Health Blog"
        description="Stay informed with our latest articles on health, wellness, and laboratory science. Knowledge is the first step to better health."
        icon={Newspaper}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index}/>
        ))}
      </div>
    </div>
  );
}
