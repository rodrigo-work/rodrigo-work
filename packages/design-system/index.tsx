// import { AnalyticsProvider } from '@repo/analytics';
// import { AuthProvider } from '@repo/auth/provider';
import type { ThemeProviderProps } from 'next-themes'
import { TailwindIndicator } from './components/tailwind-indicator'
import { Toaster } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'
import ActiveThemeProvider from './providers/active-theme'
import { ThemeProvider } from './providers/theme'

type DesignSystemProviderProperties = ThemeProviderProps & {
  privacyUrl?: string
  termsUrl?: string
  helpUrl?: string
  activeThemeValue?: string
}

export const DesignSystemProvider = ({
  children,
  // privacyUrl,
  // termsUrl,
  // helpUrl,
  activeThemeValue,
  ...properties
}: DesignSystemProviderProperties) => (
  <>
    <ThemeProvider {...properties}>
      {/* <AuthProvider
        privacyUrl={privacyUrl}
        termsUrl={termsUrl}
        helpUrl={helpUrl}
      > */}
      {/* <AnalyticsProvider> */}

      <TooltipProvider>
        <ActiveThemeProvider activeThemeValue={activeThemeValue as string}>
          {children}
        </ActiveThemeProvider>
      </TooltipProvider>
      <Toaster />
      <TailwindIndicator />
      {/* </AnalyticsProvider> */}
      {/* </AuthProvider> */}
    </ThemeProvider>
  </>
)
