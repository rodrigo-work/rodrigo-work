/** biome-ignore-all lint/suspicious/noArrayIndexKey: No array index key */
import { HideIfEmpty } from 'fumadocs-core/hide-if-empty'
import Link from 'fumadocs-core/link'
import type { PageTree } from 'fumadocs-core/server'
import { NavProvider } from 'fumadocs-ui/contexts/layout'
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree'
import { type GetSidebarTabsOptions, getSidebarTabs } from 'fumadocs-ui/utils/get-sidebar-tabs'
import { ChevronDown, Languages, Sidebar as SidebarIcon, X } from 'lucide-react'
import { type ComponentProps, Fragment, type HTMLAttributes, type ReactNode, useMemo } from 'react'
import { cn } from '../../../lib/cn'
import { LanguageToggle } from '../../language-toggle'
import { type Option, RootToggle } from '../../root-toggle'
import { LargeSearchToggle, SearchToggle } from '../../search-toggle'
import {
  Sidebar,
  SidebarCollapseTrigger,
  type SidebarComponents,
  SidebarContent,
  SidebarContentMobile,
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarPageTree,
  type SidebarProps,
  SidebarTrigger,
  SidebarViewport
} from '../../sidebar'
import { ThemeToggle } from '../../theme-toggle'
import { buttonVariants } from '../../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import {
  type BaseLayoutProps,
  BaseLinkItem,
  type BaseLinkType,
  getLinks,
  type LinkItemType
} from '../shared/index'
import { LayoutBody, LayoutTabs, Navbar, NavbarSidebarTrigger } from './client'

export interface DocsLayoutProps extends BaseLayoutProps {
  tree: PageTree.Root
  tabMode?: 'sidebar' | 'navbar'

  nav?: BaseLayoutProps['nav'] & {
    mode?: 'top' | 'auto'
  }

  sidebar?: SidebarOptions

  containerProps?: HTMLAttributes<HTMLDivElement>
}

interface SidebarOptions
  extends ComponentProps<'aside'>,
    Pick<SidebarProps, 'defaultOpenLevel' | 'prefetch'> {
  components?: Partial<SidebarComponents>

  /**
   * Root Toggle options
   */
  tabs?: Option[] | GetSidebarTabsOptions | false

  banner?: ReactNode
  footer?: ReactNode

  /**
   * Support collapsing the sidebar on desktop mode
   *
   * @defaultValue true
   */
  collapsible?: boolean
}

export function DocsLayout(props: DocsLayoutProps) {
  const {
    tabMode = 'sidebar',
    nav: { transparentMode, ...nav } = {},
    sidebar: { tabs: tabOptions, ...sidebarProps } = {},
    i18n = false,
    disableThemeSwitch = false,
    themeSwitch = { enabled: !disableThemeSwitch }
  } = props

  const navMode = nav.mode ?? 'auto'
  const links = getLinks(props.links ?? [], props.githubUrl)
  const tabs = useMemo(() => {
    if (Array.isArray(tabOptions)) {
      return tabOptions
    }

    if (typeof tabOptions === 'object') {
      return getSidebarTabs(props.tree, tabOptions)
    }

    if (tabOptions !== false) {
      return getSidebarTabs(props.tree)
    }

    return []
  }, [tabOptions, props.tree])

  function sidebar() {
    const {
      banner,
      footer,
      components,
      collapsible = true,
      prefetch,
      defaultOpenLevel,
      ...rest
    } = sidebarProps
    const iconLinks = links.filter((item) => item.type === 'icon')

    const rootToggle = (
      <>
        {tabMode === 'sidebar' && tabs.length > 0 && <RootToggle className="mb-2" options={tabs} />}
        {tabMode === 'navbar' && tabs.length > 0 && (
          <RootToggle className="lg:hidden" options={tabs} />
        )}
      </>
    )

    const sidebarNav = (
      <div className="flex justify-between">
        <Link className="inline-flex items-center gap-2.5 font-medium" href={nav.url ?? '/'}>
          {nav.title}
        </Link>
        {collapsible && (
          <SidebarCollapseTrigger
            className={cn(
              buttonVariants({
                color: 'ghost',
                size: 'icon-sm',
                className: 'mt-px mb-auto text-fd-muted-foreground'
              })
            )}
          >
            <SidebarIcon />
          </SidebarCollapseTrigger>
        )}
      </div>
    )

    const viewport = (
      <SidebarViewport>
        {links
          .filter((item) => item.type !== 'icon')
          .map((item, i, arr) => (
            <SidebarLinkItem
              className={cn('lg:hidden', i === arr.length - 1 && 'mb-4')}
              item={item}
              key={i}
            />
          ))}

        <SidebarPageTree components={components} />
      </SidebarViewport>
    )

    const content = (
      <SidebarContent
        {...rest}
        className={cn(
          navMode === 'top' ? 'border-e-0 bg-transparent' : '[--fd-nav-height:0px]',
          rest.className
        )}
      >
        <HideIfEmpty as={SidebarHeader}>
          {navMode === 'auto' && sidebarNav}
          {nav.children}
          {banner}
          {rootToggle}
        </HideIfEmpty>
        {viewport}
        <HideIfEmpty
          as={SidebarFooter}
          className="flex flex-row text-fd-muted-foreground items-center"
        >
          {iconLinks.map((item, i) => (
            <BaseLinkItem
              aria-label={item.label}
              className={cn(
                buttonVariants({
                  size: 'icon-sm',
                  color: 'ghost',
                  className: 'lg:hidden'
                })
              )}
              item={item}
              key={i}
            >
              {item.icon}
            </BaseLinkItem>
          ))}
          {footer}
        </HideIfEmpty>
      </SidebarContent>
    )

    const mobile = (
      <SidebarContentMobile {...rest}>
        <SidebarHeader>
          <SidebarTrigger
            className={cn(
              buttonVariants({
                size: 'icon-sm',
                color: 'ghost',
                className: 'ms-auto text-fd-muted-foreground'
              })
            )}
          >
            <X />
          </SidebarTrigger>
          {banner}
          {rootToggle}
        </SidebarHeader>
        {viewport}
        <HideIfEmpty as={SidebarFooter} className="flex flex-row items-center justify-end">
          {iconLinks.map((item, i) => (
            <BaseLinkItem
              aria-label={item.label}
              className={cn(
                buttonVariants({
                  size: 'icon-sm',
                  color: 'ghost'
                }),
                'text-fd-muted-foreground lg:hidden',
                i === iconLinks.length - 1 && 'me-auto'
              )}
              item={item}
              key={i}
            >
              {item.icon}
            </BaseLinkItem>
          ))}
          {i18n ? (
            <LanguageToggle>
              <Languages className="size-4.5 text-fd-muted-foreground" />
            </LanguageToggle>
          ) : null}
          {themeSwitch.enabled !== false &&
            (themeSwitch.component ?? (
              <ThemeToggle mode={themeSwitch.mode ?? 'light-dark-system'} />
            ))}
          {footer}
        </HideIfEmpty>
      </SidebarContentMobile>
    )

    return (
      <Sidebar
        Content={content}
        defaultOpenLevel={defaultOpenLevel}
        Mobile={mobile}
        prefetch={prefetch}
      />
    )
  }

  return (
    <TreeContextProvider tree={props.tree}>
      <NavProvider transparentMode={transparentMode}>
        <LayoutBody
          {...props.containerProps}
          className={cn(
            'md:[--fd-sidebar-width:286px] xl:[--fd-toc-width:286px]',
            props.containerProps?.className
          )}
        >
          {sidebar()}
          <DocsNavbar {...props} links={links} tabs={tabMode === 'navbar' ? tabs : []} />
          {props.children}
        </LayoutBody>
      </NavProvider>
    </TreeContextProvider>
  )
}

function DocsNavbar({
  links,
  tabs,
  searchToggle = {},
  themeSwitch = {},
  nav = {},
  ...props
}: DocsLayoutProps & {
  links: LinkItemType[]
  tabs: Option[]
}) {
  const navMode = nav.mode ?? 'auto'
  const sidebarCollapsible = props.sidebar?.collapsible ?? true

  return (
    <Navbar
      className={cn(
        'on-root:[--fd-nav-height:56px] md:on-root:[--fd-nav-height:64px]',
        tabs.length > 0 && 'lg:on-root:[--fd-nav-height:104px]'
      )}
      mode={navMode}
    >
      <div className={cn('flex border-b px-4 gap-2 flex-1 md:px-6', navMode === 'top' && 'ps-7')}>
        <div
          className={cn(
            'items-center',
            navMode === 'top' && 'flex flex-1',
            navMode === 'auto' && [
              'hidden max-md:flex',
              sidebarCollapsible && 'has-data-[collapsed=true]:md:flex'
            ]
          )}
        >
          {sidebarCollapsible && navMode === 'auto' && (
            <SidebarCollapseTrigger
              className={cn(
                buttonVariants({
                  color: 'ghost',
                  size: 'icon-sm'
                }),
                'text-fd-muted-foreground data-[collapsed=false]:hidden max-md:hidden'
              )}
            >
              <SidebarIcon />
            </SidebarCollapseTrigger>
          )}
          <Link
            className={cn(
              'inline-flex items-center gap-2.5 font-semibold',
              navMode === 'auto' && 'md:hidden'
            )}
            href={nav.url ?? '/'}
          >
            {nav.title}
          </Link>
        </div>
        {searchToggle.enabled !== false &&
          (searchToggle.components?.lg ? (
            <div
              className={cn(
                'w-full my-auto max-md:hidden',
                navMode === 'top' ? 'rounded-xl max-w-sm' : 'max-w-[240px]'
              )}
            >
              {searchToggle.components.lg}
            </div>
          ) : (
            <LargeSearchToggle
              className={cn(
                'w-full my-auto max-md:hidden',
                navMode === 'top' ? 'rounded-xl max-w-sm ps-2.5' : 'max-w-[240px]'
              )}
              hideIfDisabled
            />
          ))}
        <div className="flex flex-1 items-center justify-end md:gap-2">
          <div className="flex items-center gap-6 empty:hidden max-lg:hidden">
            {links
              .filter((item) => item.type !== 'icon')
              .map((item, i) => (
                <NavbarLinkItem
                  className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary"
                  item={item}
                  key={i}
                />
              ))}
          </div>
          {nav.children}
          {links
            .filter((item) => item.type === 'icon')
            .map((item, i) => (
              <BaseLinkItem
                aria-label={item.label}
                className={cn(
                  buttonVariants({ size: 'icon-sm', color: 'ghost' }),
                  'text-fd-muted-foreground max-lg:hidden'
                )}
                item={item}
                key={i}
              >
                {item.icon}
              </BaseLinkItem>
            ))}

          <div className="flex items-center md:hidden">
            {searchToggle.enabled !== false &&
              (searchToggle.components?.sm ?? <SearchToggle className="p-2" hideIfDisabled />)}
            <NavbarSidebarTrigger className="p-2 -me-1.5" />
          </div>

          <div className="flex items-center gap-2 max-md:hidden">
            {props.i18n ? (
              <LanguageToggle>
                <Languages className="size-4.5 text-fd-muted-foreground" />
              </LanguageToggle>
            ) : null}
            {themeSwitch.enabled !== false &&
              (themeSwitch.component ?? (
                <ThemeToggle mode={themeSwitch.mode ?? 'light-dark-system'} />
              ))}
            {sidebarCollapsible && navMode === 'top' && (
              <SidebarCollapseTrigger
                className={cn(
                  buttonVariants({
                    color: 'secondary',
                    size: 'icon-sm'
                  }),
                  'text-fd-muted-foreground rounded-full -me-1.5'
                )}
              >
                <SidebarIcon />
              </SidebarCollapseTrigger>
            )}
          </div>
        </div>
      </div>
      {tabs.length > 0 && (
        <LayoutTabs
          className={cn('border-b px-6 h-10 max-lg:hidden', navMode === 'top' && 'ps-7')}
          options={tabs}
        />
      )}
    </Navbar>
  )
}

function NavbarLinkItem({ item, ...props }: { item: LinkItemType } & HTMLAttributes<HTMLElement>) {
  if (item.type === 'menu') {
    return (
      <Popover>
        <PopoverTrigger
          {...props}
          className={cn(
            'inline-flex items-center gap-1.5 has-data-[active=true]:text-fd-primary',
            props.className
          )}
        >
          {item.url ? (
            <BaseLinkItem item={item as BaseLinkType}>{item.text}</BaseLinkItem>
          ) : (
            item.text
          )}
          <ChevronDown className="size-3" />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col">
          {item.items.map((child, i) => {
            if (child.type === 'custom') return <Fragment key={i}>{child.children}</Fragment>

            return (
              <BaseLinkItem
                className="inline-flex items-center gap-2 rounded-md p-2 text-start hover:bg-fd-accent hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4"
                item={child}
                key={i}
              >
                {child.icon}
                {child.text}
              </BaseLinkItem>
            )
          })}
        </PopoverContent>
      </Popover>
    )
  }

  if (item.type === 'custom') return item.children

  return (
    <BaseLinkItem item={item} {...props}>
      {item.text}
    </BaseLinkItem>
  )
}

function SidebarLinkItem({
  item,
  ...props
}: {
  item: Exclude<LinkItemType, { type: 'icon' }>
  className?: string
}) {
  if (item.type === 'menu')
    return (
      <SidebarFolder {...props}>
        {item.url ? (
          <SidebarFolderLink external={item.external} href={item.url}>
            {item.icon}
            {item.text}
          </SidebarFolderLink>
        ) : (
          <SidebarFolderTrigger>
            {item.icon}
            {item.text}
          </SidebarFolderTrigger>
        )}
        <SidebarFolderContent>
          {item.items.map((child, i) => (
            <SidebarLinkItem item={child} key={i} />
          ))}
        </SidebarFolderContent>
      </SidebarFolder>
    )

  if (item.type === 'custom') return <div {...props}>{item.children}</div>

  return (
    <SidebarItem external={item.external} href={item.url} icon={item.icon} {...props}>
      {item.text}
    </SidebarItem>
  )
}

export { Navbar, NavbarSidebarTrigger }
