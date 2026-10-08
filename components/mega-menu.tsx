import Link from "next/link"

interface MegaMenuColumn {
  title: string
  description?: string
  viewAllHref?: string
  items: {
    label: string
    desc?: string
    href: string
  }[]
}

interface MegaMenuProps {
  columns: MegaMenuColumn[]
  viewAllLabel?: string
}

export function MegaMenu({ columns, viewAllLabel = "Vezi toate" }: MegaMenuProps) {
  const gridClassName = columns.length >= 3 ? "grid-cols-3" : "grid-cols-2"

  return (
    <div className="fixed left-1/2 top-[104px] z-50 w-[min(1120px,calc(100vw-2rem))] max-h-[calc(100vh-7.5rem)] -translate-x-1/2 overflow-y-auto bg-anthracite text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-6 py-8 lg:px-8">
        <div className={`grid ${gridClassName} gap-8 xl:gap-12`}>
          {columns.map((column, idx) => (
            <div key={idx}>
              {column.title && (
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              )}
              {column.description && (
                <p className="text-sm text-white/70 mb-4 max-w-md">{column.description}</p>
              )}
              {column.viewAllHref && (
                <Link 
                  href={column.viewAllHref}
                  className="text-primary text-sm hover:underline mb-4 inline-block"
                >
                  {viewAllLabel}
                </Link>
              )}
              <ul className="space-y-3">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link 
                      href={item.href}
                      className="group block hover:text-primary transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.desc && (
                        <span className="mt-1 block text-sm leading-snug text-white/50 group-hover:text-primary/70 line-clamp-2">
                          {item.desc}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
