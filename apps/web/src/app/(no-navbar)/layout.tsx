export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <span className="flex flex-1 max-w-[800px] mx-auto w-full flex-col justify-center items-center">
      {children}
    </span>
  )
}
