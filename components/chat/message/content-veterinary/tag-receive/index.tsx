type Props = {
    firstName: string,
    lastName: string,
    text: string,
    date: string
}

type Name = {
   firstName: string,
   lastName: string
}

export default function TagReceive({ firstName, lastName, text, date } : Props) {

    const handleChangeNameInitials = ({ firstName, lastName } : Name) : string => {
         return `${firstName && firstName.charAt(0).toUpperCase()}${lastName && lastName.charAt(0).toUpperCase()}`
    };

    return (
        <div className={"TagReceive-container"}>
            <div className={"TagReceive-content"}>
                <div className={"TagReceive-content-circle"}>
                    <p className={"TagReceive-content-circle-p"}>{handleChangeNameInitials({ firstName, lastName })}</p>
                </div>
                <div className={"TagReceive-content-text-container"}>
                    <div className={"TagReceive-content-text-veterinary"}>
                        <p className={"TagReceive-content-text-p"}>{text}</p>
                    </div>
                    <div className={"TagReceive-content-date"}>
                        <p className={"TagReceive-content-date-p"}>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}