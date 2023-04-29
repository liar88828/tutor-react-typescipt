export type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
    // const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {     console.log(event)    }
    return (
        <div>
            <label htmlFor="name">
                Name
                <br />
                <input type="text"
                    value={value}
                    onChange={handleChange}
                />

            </label>

        </div>
    )
}