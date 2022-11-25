type Props = {
    width: string,
    height: number,
    background: string,
    color: string,
    name: string
}

export default function Tag({ width, height, background, color, name }: Props) {
    return (
        <div className={"Tag-container"} style={{ width, height, background, color }}>
           {name}
        </div>
    )
}