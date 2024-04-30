import PostItem from '@/components/posts/PostItem';
import QueryPagination from '@/components/query-pagination';
import Tag from '@/components/tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts, getAllTags, sortTags } from '@/lib/api';
import React from 'react'

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const displayPosts = allPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )

  const tags = await getAllTags();
  const sortedTags = sortTags(tags);

  return (
    <div className='container px-4 sm:px-8 max-w-7xl lg:py-10'>
      <div className="flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4 max-md:text-center">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-foreground/60">
            Byte-sized coding notes for developers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 col-start-1 max-sm:row-start-3 sm:col-span-8">
          <hr/>
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => (
                <li key={post.slug} className="">
                  <PostItem post={post}/>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nothing to show here yet</p>
          )}

          <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
        </div>

        <Card className='col-span-12 row-start-1 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1'>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
