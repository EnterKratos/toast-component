import React from 'react';

const useKey = (key, onKey = () => {}, direction = 'keydown') => {
    React.useEffect(() => {
        const keyHandler = (e) => {
            if (e.isComposing || e.keyCode === 229) {
                return;
            }

            if (e.code === key) {
                onKey(e);
            }
        };

        document.addEventListener(direction, keyHandler);

        return () => {
            document.removeEventListener(direction, keyHandler);
        };
    }, [onKey]);
};

export default useKey;