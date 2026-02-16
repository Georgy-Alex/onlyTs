import { useEffect, useState } from "react";
import { getSegmentCountByWidth } from "../lib/helpers";

export function useSegmentCount() {
    const [count, setCount] = useState<number>(() => getSegmentCountByWidth(window.innerWidth));

    useEffect(() => {
        const onResize = () => setCount(getSegmentCountByWidth(window.innerWidth));

        window.addEventListener(
            "resize",
            onResize,
            { passive: true },
        )

        return () =>
            window.removeEventListener("resize", onResize)
    }, []);

    return count;
}
