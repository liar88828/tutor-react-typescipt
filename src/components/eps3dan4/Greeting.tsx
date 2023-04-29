type GreetProps = {
    name: string
    messageCount?: number// optional value
    isLogIn: boolean
}


export const Greeting = (props: GreetProps) => {
    const { messageCount = 0 } = props// nilai default

    return (
        <div>
            <h2>
                {
                    props.isLogIn
                        ? <p> welcome {props.name} you have {messageCount}  un read message </p>
                        : 'Welcome Guest'}
            </h2>
        </div>
    )
}
