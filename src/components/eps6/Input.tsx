type InputProps = {
    value: string,
    handleChange1: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <div>
            <label htmlFor="name">
                Name1
                <br />
                <input type="text"
                    value={props.value}
                    onChange={props.handleChange1}
                />

            </label>
            <br />
            <br />
            <label htmlFor="name">
                Name2
                <br />
                <input type="text"
                    value={props.value}
                    onChange={handleInputChange2}
                />

            </label>
        </div>
    )
}