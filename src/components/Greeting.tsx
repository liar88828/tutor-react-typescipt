

type GreetProps = {
    name: string
}

export const Greeting = (props: GreetProps) => {
    return (
        <div>
            <h2>
                welcome {props.name} to the typeScript project
            </h2>
        </div>
    )
}
