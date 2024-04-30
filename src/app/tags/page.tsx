import Tag from '@/components/tag';
import { getAllTags, sortTags } from '@/lib/api'
import React from 'react'

export default function TagsPage() {
  const tags = getAllTags();
  const sortedTags = sortTags(tags);

  return (
    <div className="container max-w-4xl lg:py-10">
      <div className="flex flex-col items-center sm:items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl">Tags</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2 max-sm:justify-center">
        {sortedTags?.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
    </div>
  )
}
