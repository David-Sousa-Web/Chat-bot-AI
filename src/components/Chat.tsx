'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[340px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>dev AI interaction/</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {messages.map(message => {
              return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">  
                  {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>DV</AvatarFallback>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/57757828?v=4"/>
                    </Avatar>
                  )}

                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback>AI</AvatarFallback>
                      <AvatarImage src="https://static.vecteezy.com/system/resources/previews/021/059/827/original/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"/>
                    </Avatar>
                  )}
                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === 'user' ? 'Usuário' : 'AI'}
                    </span>
                    {message.content}
                  </p>
                </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="how can i help you?" value={input} onChange={handleInputChange}/>
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}