import Link from 'next/link'
import React from 'react'
import { badgeVariants } from './ui/badge'
import { slug } from 'github-slugger';

interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
}

export default function Tag({ tag, current, count }: TagProps) {
  return (
    <>
      <Link href={`/tags/${slug(tag)}`} className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md py-1",
      })}
      >
          {tag} {count ? `(${count})` : null}
      </Link>
    </>
  )
}
