type GreetProps = {
    name: string
    messageCount: number
    isLogIn: boolean
}


export const Greeting = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLogIn
                        ? <p> welcome {props.name} you have {props.messageCount}  un read message </p>
                        : 'Welcome Guest'}
            </h2>
        </div>
    )
}
