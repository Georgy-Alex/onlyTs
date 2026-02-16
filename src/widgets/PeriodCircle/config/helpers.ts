import { useMemo } from "react";

export const useCirclePoints = (count: number, radius: number) =>
    useMemo(() => {
        const step = (2 * Math.PI) / count;
        const offsetRad = (30 * Math.PI) / 180;


        return Array.from({ length: count }, (_, i) => {
            const angle = i * step - Math.PI / 2 + offsetRad;

            return {
                id: i,
                left: `${50 + Math.cos(angle) * radius}%`,
                top: `${50 + Math.sin(angle) * radius}%`,
            } as const;
        });
    }, [count, radius]);

