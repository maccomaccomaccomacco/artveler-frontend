export default function FullScrenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col h-screen w-full">
      {/* <nav className="h-16 shadow-md"></nav> */}
        {children}
    </main>
  )
}
