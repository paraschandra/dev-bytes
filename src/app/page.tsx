import FeaturedPosts from '@/components/posts/FeaturedPosts';
import PostItem from '@/components/posts/PostItem';
import { buttonVariants } from '@/components/ui/button';
import { getAllPosts } from '@/lib/api'
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function page() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.featured === true);
  const latestPosts = allPosts.slice(0, 5);

  return (
    <>
      <section className='w-full xl:p-5 p-0'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-0 md:p-4'>
          {featuredPosts?.map((blog, index) => (
            <FeaturedPosts blog={blog} key={index}/>
          ))}
        </div>
      </section>

      <section className="w-full xl:p-5 p-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-center">
          Latest Posts
        </h1>
        <div className='w-full max-w-5xl p-0 pt-4 md:p-4'>
          <ul className="flex flex-col">
            {latestPosts.map((post) => (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem post={post}/>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <Link href="/blog" className={cn(buttonVariants({ variant: "link" }), "mt-4")}>
            All posts →
          </Link>
        </div>
      </section>
    </>
  )
}
