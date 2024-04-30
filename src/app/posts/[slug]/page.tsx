import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import Tag from "@/components/tag";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { dateFormatter } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
	const posts = getAllPosts();
  
	return posts.map((post) => ({
	  slug: post.slug,
	}));
}

export default function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <div className="max-w-5xl mx-auto min-h-screen space-y-6">
			<div className="sm:px-10 space-y-5">
				<div className="flex gap-2">
					{post.tags?.map((tag) => (
						<Tag tag={tag} key={tag} />
					))}
				</div>
				
				<h1 className=" text-4xl font-bold dark:text-gray-200">
					{post?.title}
				</h1>

                <time dateTime={post?.date} className='text-sm dark:text-gray-400'>
                    {dateFormatter(post?.date)}
                </time>
			</div>

			<div className="w-full h-96 relative">
				<Image
					priority
					src={post?.coverImage!}
					alt="cover"
					fill
					className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
					sizes="(max-width: 768px) 85vw, (max-width: 1200px) 90vw, 100vw"
				/>
			</div>
            
			<MarkdownPreview content={post?.content || ""} />
		</div>
    )
}