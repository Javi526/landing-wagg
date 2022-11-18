import Image from "next/image";

type TypeValues = 'receive'|'transmitter';

type Props = {
    img: string,
    date: string,
    type: TypeValues
}

export default function MessageImage({ img, date, type } : Props) {

    const handleChangeType = (type: string) : string => {
         if (type === "receive") {
             return "MessageImage-receive-container"
         } else {
             return "MessageImage-transmitter-container "
         }
    };

    return (
        <div className={`${handleChangeType(type)}`}>
            <div className={"MessageImage-content"}>
              <div className={"MessageImage-content-img"}>
                  <Image src={img} width={240} height={160} alt={`img-${img}`} />
              </div>
                <div className={"MessageImage-content-date"}>
                    <p className={"MessageImage-content-date-p"}>{date}</p>
                </div>
            </div>
        </div>
    )
}