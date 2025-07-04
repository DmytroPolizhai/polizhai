import { useEffect, useRef } from 'react';

export function useRepeater(callback: () => void, delay: number | null) {
    const savedCallback = useRef<() => void>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay === null) return;

        function tick() {
            savedCallback.current?.();
        }

        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

