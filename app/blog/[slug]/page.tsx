import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { blogPosts } from "@/lib/seo-data/blog-posts";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | ForecourIQ Dealer Blog`,
    description: post.excerpt,
  };
}

// Custom components to pass to MDXRemote
const components = {
  h2: (props: any) => <h2 className="text-3xl font-syne font-bold text-navy mt-12 mb-6" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-syne font-bold text-navy mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-lg text-slate-brand leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-brand text-lg" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => <a className="text-green-data font-bold hover:underline" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-green-data pl-6 italic text-xl text-navy/80 my-8" {...props} />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postMeta = blogPosts.find(p => p.slug === slug);

  if (!postMeta) notFound();

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    // If we haven't generated the file yet, show a placeholder
    fileContent = `## Article coming soon\n\nThis editorial piece is currently being drafted by the ForecourIQ team. Check back shortly.`;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postMeta.title,
    "description": postMeta.excerpt,
    "author": {
      "@type": "Organization",
      "name": postMeta.author
    },
    "datePublished": postMeta.date,
    "dateModified": postMeta.date
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-32 pb-24 bg-white">
        <article className="max-w-3xl mx-auto px-6 lg:px-0">
           
           <div className="mb-12">
              <Link href="/blog" className="text-sm font-bold text-green-data hover:underline flex items-center gap-2 mb-8">
                 ← Back to Intelligence Hub
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-brand mb-6">
                 <span className="bg-navy text-green-data px-3 py-1 rounded-md">{postMeta.category}</span>
                 <span>{new Date(postMeta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                 <span>•</span>
                 <span>{postMeta.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold text-navy leading-tight mb-8">
                {postMeta.title}
              </h1>
              
              <div className="flex items-center gap-4 pb-8 border-b border-navy/5">
                 <div className="w-12 h-12 rounded-full bg-slate-light border-2 border-white overflow-hidden shadow-sm flex items-center justify-center font-bold text-navy">
                    FIQ
                 </div>
                 <div>
                    <p className="font-bold text-navy">{postMeta.author}</p>
                    <p className="text-xs text-slate-brand">Market Intelligence Team</p>
                 </div>
              </div>
           </div>

           <div className="prose-container max-w-none">
              <MDXRemote source={fileContent} components={components} />
           </div>

           <div className="mt-16 pt-12 border-t border-navy/5 flex justify-between items-center">
              <h3 className="font-bold text-navy">Share this article</h3>
              <div className="flex gap-4">
                 <button className="w-10 h-10 rounded-full bg-slate-light flex items-center justify-center text-navy hover:bg-green-data hover:text-white transition-colors">in</button>
                 <button className="w-10 h-10 rounded-full bg-slate-light flex items-center justify-center text-navy hover:bg-green-data hover:text-white transition-colors">tw</button>
              </div>
           </div>
           
        </article>
      </div>

      <CTA />
    </>
  );
}
