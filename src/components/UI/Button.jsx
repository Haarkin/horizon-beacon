export default function Button({ children, textOnly, className, ...props }) {
    const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`

    return <button type className={cssClasses} {...props}>
        {children}
    </button>
}