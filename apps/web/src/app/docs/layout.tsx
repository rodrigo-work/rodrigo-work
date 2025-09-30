import { DocsLayout } from '@/components/layout/docs'
import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions()

  return (
    <DocsLayout
      containerProps={{
        style: {
          '--fd-page-width': '80%'
          // '--fd-layout-width': '1400px'
          // '--spacing-fd-container': '1120px'
        } as object
      }}
      tree={source.pageTree}
      {...base}
      nav={{ ...nav, mode: 'top' }}
      sidebar={{
        collapsible: false
      }}
      tabMode={'navbar'}
    >
      {children}
    </DocsLayout>
  )
}
