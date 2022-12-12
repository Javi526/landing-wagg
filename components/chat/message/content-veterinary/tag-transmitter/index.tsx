type Props = {
    text: string,
    date: string
}

export default function TagTransmitter({ text, date }: Props) {
    return (
        <div className={"TagTransmitter-container"}>
            <div className={"TagTransmitter-content"}>
                <div className={"TagTransmitter-content-text-veterinary"}>
                    <p className={"TagTransmitter-content-text-p"} dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <div className={"TagTransmitter-content-date"}>
                    <p className={"TagTransmitter-content-date-p"}>{date}</p>
                </div>
            </div>
        </div>
    )
}