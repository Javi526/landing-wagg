import { useEffect, useState } from 'react';

type Props = {
    minKeyboardHeight: number,
    defaultValue: boolean
}

const useDetectKeyboardOpen = ({ minKeyboardHeight = 300, defaultValue } :Props) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        if (typeof window === "object") {
            const document : any = window;
            const listener = () => {
                const newState = window.screen.height - minKeyboardHeight > document.visualViewport.height;
                if (isKeyboardOpen != newState) {
                    setIsKeyboardOpen(newState);
                }
            };
              document.visualViewport.addEventListener('resize', listener);
            return () => {
                document.visualViewport.removeEventListener('resize', listener);
            };
        }
    }, []);

    return isKeyboardOpen;
};

export default useDetectKeyboardOpen;