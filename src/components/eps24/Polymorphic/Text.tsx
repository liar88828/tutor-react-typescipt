
type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary';
    children: React.ReactNode
    // as?: React.ElementType
    as?: E
}
type TextProps<E extends React.ElementType> = TextOwnProps<E>
    & Omit<React.ComponentProps<E>,
        keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>
    ({ color, size, children, as }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <div>
            <Component
                className={`class-with=${size}-${color}`} >
                {children}
            </Component>
        </div >
    )
}

export default Text