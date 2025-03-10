type RandomNumberType = { value: number }

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps =
    PositiveNumber |
    NegativeNumber |
    ZeroNumber



const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero }: RandomNumberProps) => {
    return (
        <div>RandomNumber
            {value}
            <br />
            {isPositive && 'Positive'}
            <br />
            {isNegative && 'Negative'}
            <br />
            {isZero && 0 && 'Zero'}

        </div>
    )
}

export default RandomNumber