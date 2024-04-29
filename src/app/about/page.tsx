import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="container max-w-6xl lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/assets/avatar.jpg" alt="avatar img" />
            <AvatarFallback>PC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            Paras Chandra
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Fresher | Frontend
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Greetings! I&apos;m Paras Chandra, a highly motivated newcomer with a robust academic background and practical expertise in web development. 
          Proficient in Python, SQL, HTML, CSS, JavaScript, and React JS. 
          I am actively pursuing opportunities in front-end development and software engineering. <br/><br />
          My keen interest lies in front-end development, where I aim to leverage my skills to craft intuitive interfaces and compelling web experiences. 
          My proficiency in React JS enables me to tackle intricate front-end challenges and deliver top-notch solutions.
        </p>
      </div>
    </div>
  )
}
