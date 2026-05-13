interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

const Breadcrumb = ({items}: BreadcrumbProps) => {
    return (
        <nav aria-label="fil d'ariane">
            <ol className="breadcrumb">
                {items.map((item, index) => {
                    const isLast = index === item.label.length - 1;
                    return (
                        <li key={index} className="breadcrumb__item">
                            {index > 0 && <span className="breadcrumb__separator">/</span>}
                            {isLast || !item.href ? (
                                <span className="breadcrumb__current" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <a href={item.href} className="breadcrumb__link">
                                    {item.label}
                                </a>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
export default Breadcrumb;

