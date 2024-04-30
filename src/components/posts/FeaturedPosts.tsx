import React from 'react'
import { Post } from '@/interfaces/post'
import Link from 'next/link'
import Image from 'next/image'
import { dateFormatter } from '@/lib/utils'
import Tag from '../tag'

export default function FeaturedPosts({ blog }: {blog: Post}) {
  return (
    <div  
      className='w-full border rounded-md dark:bg-graident-dark p-5 hover:ring-2 ring-blue-500 
      transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3'
      >
        <Link href={`/posts/${blog.slug}`}>
          <div className="relative w-full h-64 md:h-72 xl:h-80">
              <Image src={blog.coverImage} alt='cover-img' fill className='object-cover object-center'
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw, 100vw"/>
          </div>
        </Link>
        
        <div className="space-y-2">
          <Link href={`/posts/${blog.slug}`}>
            <h1 className="text-xl font-bold">{blog.title}</h1>
            <time dateTime={blog.date} className='text-sm text-gray-400'>
            {dateFormatter(blog.date)}
            </time>  
          </Link>
        </div>

        <div className="flex gap-2">
          {blog.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
    </div>
  )
}
