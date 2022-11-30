import ReactDOM from "react-dom";
import { ReactNode, useState, Fragment } from "react";
import { styles_Modal } from "../../constants/styles";

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
            <Fragment>
                <style jsx global>{styles_Modal}</style>
                <div className={"modal-container"}>{children}</div>
            </Fragment>,
            modal
        );
    } else {
        return null;
    }
}