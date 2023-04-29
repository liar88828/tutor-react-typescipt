type ButtonProps = {
    // handleClick: () => void,
    handleClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => void,
}
export const Button = (props: ButtonProps) => {
    return (
        <div>
            {/* <button onClick={props.handleClick}>Click</button> */}
            <button onClick={
                (event) => {
                    // console.log('Button Click ', event)
                    props.handleClick(event, 10)
                }
            }>Click</button>
        </div >
    )
}
