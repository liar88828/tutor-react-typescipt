import { useEffect, useRef } from 'react'

const DomRef = () => {
    // const inputRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null!)


    useEffect(() => {
        // inputRef.current?.focus()
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <label >
                name
                <input type="text" ref={inputRef} />
            </label>
        </div>
    )
}

export default DomRef