'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'

export const CopyToMarkdown = ({ markdownContent }: { markdownContent: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdownContent)
    setCopied(true)

    // Reset back to copy icon after 2 seconds
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <button
      className={cn(
        'sm:hidden--',
        buttonVariants({
          variant: 'outline',
          size: 'sm'
        })
      )}
      onClick={() => {
        void handleCopy()
      }}
      type="button"
    >
      {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
      Copy page
    </button>
  )
}
