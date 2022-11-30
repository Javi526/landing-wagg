import ReactDOM from "react-dom";
import { ReactNode, useState } from "react";

type Props = {
    openModal: boolean,
    children: ReactNode
};

export default function Modal({ openModal, children } : Props) {

    const [modal] = useState<Element | DocumentFragment | null>(() => {
        if (typeof window === 'object') {
            return document?.getElementById("modal-root") as Element | DocumentFragment;
        }
        return null
    });


    if (openModal && modal) {
        return ReactDOM.createPortal(
            <div className={"modal-container"}>
                {children}
            </div>,
            modal
        );
    } else {
        return null;
    }
}