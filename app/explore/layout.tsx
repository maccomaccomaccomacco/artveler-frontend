
export default function Layout({ children }) {
    return (
        <div className="flex w-full items-start justify-end gap-2 px-4 md:px-12">
            <div className="mx-auto mt-16">
                {children}
            </div>
        </div>
    )
  }