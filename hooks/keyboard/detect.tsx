import { useEffect, useState } from 'react';

const minKeyboardHeight : number = 300;
const useDetectKeyboardOpen = () => {
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