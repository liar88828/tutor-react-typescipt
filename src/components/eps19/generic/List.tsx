
type ListProps = {
    items: string[] | number[] // | { first: string, last: string }[]
    onClick: (value: string | number
        // | { first: string, last: string }
    ) => void
}

const List = ({ items, onClick }: ListProps) => {

    return (
        <div><h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default List