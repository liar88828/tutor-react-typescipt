import React from 'react'
import { Greeting } from './Greeting'

// type Props = {}

const CustomComponents = (props: React.ComponentProps<typeof Greeting>) => {
    return (
        <div>{props.name}</div>
    )
}

export default CustomComponents