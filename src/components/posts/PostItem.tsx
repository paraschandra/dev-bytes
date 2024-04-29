import React from 'react'
import { Post } from '@/interfaces/post'
import Link from 'next/link'
import { cn, dateFormatter } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { Calendar } from 'lucide-react'
import Tag from '../tag'

export default function PostItem({ post }: { post: Post }) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
      </div>

      <div className="flex gap-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      
      <div className="max-w-none text-muted-foreground">{post.summary}</div>
      
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{dateFormatter(post.date)}</time>
          </dd>
        </dl>
        <Link
          href={`/posts/${post.slug}`}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}