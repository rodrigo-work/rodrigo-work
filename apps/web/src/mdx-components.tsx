import { APIPage } from 'fumadocs-openapi/ui'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import * as icons from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import { openapi } from './lib/openapi'

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
    ...components
  } satisfies MDXComponents
}
