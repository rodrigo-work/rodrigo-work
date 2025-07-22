'use client'

import { Button } from '@repo/design-system/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@repo/design-system/components/ui/navigation-menu'
import { Menu, MoveRight, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import type { Dictionary } from '@repo/internationalization'
// import { LanguageSwitcher } from './language-switcher'
import { RodrigoWorkLogo } from '@repo/about'
import { ModeToggle } from '@repo/design-system/components/theme-toggle'
import { LanguageSwitcher } from './language-switcher'
import { ThemeSelector } from './theme-selector'

type HeaderProps = {
  dictionary: Dictionary
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export type Demo = {
  title?: string
  href: string
  description?: string
}

export type DemoCategory = { name: string; items: Demo[] }

const demos = [
  {
    name: 'File Conventions',
    items: [
      {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.'
      },
      {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.'
      },
      {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
      },
      {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.'
      },
      {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
      },
      {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
      }
    ]
  },
  {
    name: 'Docs',
    items: [
      {
        href: '/docs'
      }
    ]
  }
] as const satisfies DemoCategory[]

export type DemoSlug = (typeof demos)[number]['items'][number]['href']

export const data = { demos }

export const Header = ({ dictionary }: HeaderProps) => {
  const navigationItems = [
    {
      title: dictionary.web.header.home,
      href: '/',
      description: ''
    },
    {
      title: dictionary.web.header.product.title,
      description: dictionary.web.header.product.description,
      items: [
        {
          title: dictionary.web.header.product.pricing,
          href: '/projects'
        }
      ]
    }
  ]

  // if (env.NEXT_PUBLIC_DOCS_URL) {
  //   navigationItems.push({
  //     title: dictionary.web.header.docs,
  //     href: env.NEXT_PUBLIC_DOCS_URL,
  //     description: ''
  //   })
  // }

  const [isOpen, setOpen] = useState(false)
  return (
    <header className="bg-background sticky left-0 top-0 z-40 w-full border-b">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
        <div className="items-center-- justify-start-- hidden flex-row gap-4 lg:flex">
          <NavigationMenu
            viewport={false}
            className="items-start-- justify-start-- flex--"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted bg-linear-to-b outline-hidden flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            rodrigo.work
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {data.demos.map((item) => {
                return (
                  <NavigationMenuItem key={item.name}>
                    {item.items.length > 1 ? (
                      <>
                        <NavigationMenuTrigger>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((component: Demo) => {
                              return (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              )
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.items[0].href}>{item.name}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2 lg:justify-center">
          <RodrigoWorkLogo size="sm" />
          {/* <Image
            src={Logo}
            alt="Logo"
            width={24}
            height={24}
            className="dark:invert"
          />
          <p className="whitespace-nowrap font-semibold">next-forge</p> */}
        </div>
        <div className="flex w-full justify-end gap-4">
          <Button variant="ghost" className="hidden md:inline" asChild>
            <Link href="/contact">{dictionary.web.header.contact}</Link>
          </Button>
          <div className="hidden border-r md:inline" />
          <div className="hidden md:inline">
            <ModeToggle />
          </div>
          <div className="hidden md:inline">
            <LanguageSwitcher compact />
          </div>
          <div className="hidden md:inline">
            <ThemeSelector />
          </div>
          {/* <Button variant="outline" asChild className="hidden md:inline">
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>
              {dictionary.web.header.signIn}
            </Link>
          </Button>
          <Button asChild>
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
              {dictionary.web.header.signUp}
            </Link>
          </Button> */}
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="bg-background container absolute right-0 top-20 flex w-full flex-col gap-8 border-t py-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between"
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="text-muted-foreground h-4 w-4 stroke-1" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center justify-between"
                      >
                        <span className="text-muted-foreground">
                          {subItem.title}
                        </span>
                        <MoveRight className="h-4 w-4 stroke-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
