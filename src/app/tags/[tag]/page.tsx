import React from 'react'
import { getAllTags, getPostByTag, sortTags } from '@/lib/api';
import { slug } from 'github-slugger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Tag from '@/components/tag';
import PostItem from '@/components/posts/PostItem';
import QueryPagination from '@/components/query-pagination';

interface TagPageProps {
    params: {
        tag: string;
    };
    searchParams: {
        page?: string;
    };
}

export const generateStaticParams = () => {
    const tags = getAllTags();
    const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
    return paths;
};

const POSTS_PER_PAGE = 5;

export default function TagPage({ params, searchParams }: TagPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const { tag } = params;
  const title = tag.split("-").join(' ');
  const tagPosts = getPostByTag(tag);
  const totalPages = Math.ceil(tagPosts.length / POSTS_PER_PAGE);

  const displayPosts = tagPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags();
  const sortedTags = sortTags(tags);

  return (
    <div className="container px-4 sm:px-8 max-w-7xl lg:py-10">
      <div className="flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 col-start-1 max-sm:row-start-3 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                return (
                  <li key={post.slug}>
                    <PostItem post={post}/>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          
          <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
        </div>
        <Card className="col-span-12 row-start-1 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
