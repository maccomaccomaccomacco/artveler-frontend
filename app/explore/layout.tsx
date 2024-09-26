
export default function Layout({ children }) {
    return (
        <div className="mx-5">
            <div className="flex flex-col w-full items-start justify-end gap-2">
                {children}
            </div>
        </div>
    )
  }