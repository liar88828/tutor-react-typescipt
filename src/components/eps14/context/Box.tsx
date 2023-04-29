import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <p style={{ background: theme.primary.main, color: theme.primary.text }}>Box theme</p>
        </div>
    )
}

export default Box