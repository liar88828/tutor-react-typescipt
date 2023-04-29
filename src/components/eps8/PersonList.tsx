import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}
export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => (<h4 key={name.first + name.last}>{name.first} {name.last}</h4>))}
        </div>
    )
}
