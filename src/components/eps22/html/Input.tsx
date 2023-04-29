import React from 'react'

type InputProps = React.ComponentProps<'input'>

const Input = (props: InputProps) => {
    return (
        <div><label >
            Input
            <input {...props} />
        </label>
        </div>
    )
}

export default Input