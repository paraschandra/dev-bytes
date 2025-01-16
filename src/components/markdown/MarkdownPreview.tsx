import { icons } from '@/lib/icon';
import { cn } from '@/lib/utils';
import React from 'react'
import { PiTerminalThin } from 'react-icons/pi';
import Markdown from 'react-markdown';
import CopyButton from './CopyButton';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

type MarkdownProps = {
    content: string;
    className?: string;
}

export default function MarkdownPreview({content, className = "sm:px-10 sm:py-2"}: MarkdownProps) {
  return (
    <Markdown
     className={cn("dark:text-gray-200 space-y-8", className)}
     remarkPlugins={[gfm]}
     rehypePlugins={[rehypeRaw]}
     components={{
        h1: ({ node, ...props }) => {
            return <h1 {...props} className="text-3xl font-bold" />;
        },
        h2: ({ node, ...props }) => {
            return (
                <h1
                    {...props}
                    className="text-2xl font-bold mt-10 mb-10"
                />
            );
        },
        h3: ({ node, ...props }) => {
            return (
                <h1
                    {...props}
                    className="text-xl font-semibold mt-10 mb-10"
                />
            );
        },
        h4: ({ node, ...props }) => {
            return (
                <h1
                    {...props}
                    className="text-lg font-semibold mt-10 mb-10"
                />
            );
        },
        p: ({ node, ...props }) => {
            return <p {...props} className="mt-5 mb-5" />;
        },
        code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const id = (Math.floor(Math.random() * 100) + 1).toString();
            if (match?.length) {
                let Icon = PiTerminalThin;
                const isMatch = icons.hasOwnProperty(match[1]);
                if (isMatch) {
                    Icon = icons[match[1] as keyof typeof icons];
                }

                return (
                    <div className=" bg-graident-dark text-gray-300 border-[0.5px] rounded-md border-zinc-500">
                        <div className="flex items-center justify-between px-5 py-1 sm:py-2 border-b-[0.5px] border-zinc-500">
                            <div className="flex items-center gap-2">
                                <Icon />
                                <p className="text-sm text-gray-400">
                                    {/* @ts-ignore  */}
                                    {match[1]}
                                </p>
                            </div>
                            <CopyButton id={id} />
                        </div>
                        <div className="overflow-x-auto w-full">
                            <div className='px-1 sm:px-2' id={id}>
                                <SyntaxHighlighter
                                    language={match[1]}
                                    style={atomDark}
                                    showLineNumbers={false}
                                    wrapLines={true}
                                    PreTag="div"
                                    className = "text-xs sm:text-base"
                                    customStyle={{ background: 'transparent' }}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <code
                        className="text-md break-words bg-zinc-700 px-1 rounded-sm"
                        {...props}
                    >
                        {children}
                    </code>
                );
            }
        },
        blockquote: ({ node, ...props }) => {
            return (
                <div
                    className="bg-opacity-50 px-3 border-l-4 rounded-md border-blue-500 flex relative"
                    style={{
                        background: "#242C3D",
                    }}
                >
                    <blockquote {...props} className='leading-5 md:leading-3'/>
                </div>
            );
        },
        img: ({ node, ...props }) => {
            return (
                <>
                    <span className="block relative w-full h-96 rounded-md mt-5 mb-5">
                        <Image
                            src={props?.src || ""}
                            alt={props?.alt || ""}
                            layout="fill"
                            objectPosition="center"
                            objectFit="contain"
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    </span>
                </>
            );
        },
        a: ({ node, ...props }) => {
            return (
                <a
                    {...props}
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            );
        },
        ul: ({node, ...props}) => {
            return (
                <ul 
                    {...props}
                    className='list-disc list-inside'    
                />
            );
        },
        ol: ({node, ...props}) => {
            return (
                <ol
                    {...props}
                    className='list-decimal list-inside'
                />
            );
        },
        li: ({node, ...props}) => {
            return (
                <li
                    {...props}
                    className='leading-6'
                />
            );
        },
        br: ({node, ...props}) => {
            return (
                <br />
            )
        },
    }}
    >
        {content}
    </Markdown>
  )
}
