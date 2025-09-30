import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      searchToggle={{ enabled: false }}
      themeSwitch={{ enabled: true, mode: 'light-dark-system' }}
    >
      {children}
    </HomeLayout>
  )
}
