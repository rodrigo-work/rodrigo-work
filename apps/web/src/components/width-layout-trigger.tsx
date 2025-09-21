'use client'

import { useThemeLayoutConfig } from '@/hooks/use-active-theme'
import { Button } from '@repo/design-system/components/ui/button'
import { GalleryHorizontalIcon } from 'lucide-react'
import type { ReactElement } from 'react'

export function WidthLayoutTrigger(): ReactElement {
  const { activeThemeLayout, setActiveThemeLayout } = useThemeLayoutConfig()

  return (
    <Button
      className="text-fd-muted-foreground cursor-pointer"
      onClick={() => {
        setActiveThemeLayout(activeThemeLayout === 'disabled' ? 'enabled' : 'disabled')
      }}
      type="button"
    >
      <GalleryHorizontalIcon className="h-4 w-4" />
    </Button>
  )
}
