'use client'

import { CursorArrowIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { useAccount, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { wagmiConfig } from '@/wagmi.config'
import { useCopyToClipboard } from '@/hooks/common/useCopyToClipboard'
import { toast, Toaster } from 'sonner'
import { Input } from '@/components/ui/input'
import { PlusCircle, Search, Wallet } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Header } from '@/components/Header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { WalletModal } from '@/components/WalletModal'
import { NetworkSwitcher } from '@/components/NetworkSwitcher'

export default function Home() {
  const { address } = useAccount()

  const [show, setShow] = useState(false)

  const toggleModal = (e: boolean) => {
    setShow(e)
  }

  const Action = () => (
    <>
      <NetworkSwitcher />
      <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
        {({ isLoading }) => (
          <Button className="mr-4 flex items-center">
            {isLoading && <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-white" />}{' '}
            {address ? address : 'Connect Wallet'}
          </Button>
        )}
      </WalletModal>
    </>
  )

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-100">
        <Header action={<Action />} />
        <main className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-purple-700">推荐内容</h2>
            <Button variant="outline" className="flex items-center space-x-2">
              <PlusCircle className="h-5 w-5" />
              <span>发布新内容</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Post ${item}`}
                    alt={`Post ${item}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">区块链生活分享 #{item}</h3>
                    <p className="text-sm text-gray-600">这是一个关于区块链生活的有趣分享...</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">用户名</span>
                      </div>
                      <span className="text-sm text-gray-500">2小时前</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
