import type { ReactNode } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Header({ action }: { action?: ReactNode }) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-bold text-purple-600">小紫书</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Button variant="ghost">首页</Button>
              </li>
              <li>
                <Button variant="ghost">发现</Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          <div className="relative min-w-[30rem]">
            <Input className="w-full pl-10" placeholder="搜索" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {true ? (
            action
          ) : (
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  )
}
