import gsap from "gsap";
import { ANIMATION_DURATION } from "index";
import React, { useEffect, useRef } from "react";
import { classNames } from "shared/lib/classNames";
import { TimeBlocksPeriod } from "shared/lib/TimeBlocks.interface";
import { useCirclePoints } from "../config/helpers";
import cls from './PeriodCircle.module.scss'

type Props = {
    periods: TimeBlocksPeriod[];
    activeIdx: number;
    onChange: (idx: number) => void;
    displayedLabel: string;
};

export const PeriodCircle: React.FC<Props> = ({ periods, activeIdx, onChange, displayedLabel }) => {
    const circleRef = useRef<HTMLDivElement>(null);

    const points = useCirclePoints(periods.length, 50);

    useEffect(() => {
        if (circleRef.current) {
            gsap.to(circleRef.current,
                { rotate: (-360 / periods.length) * activeIdx, duration: ANIMATION_DURATION, ease: "power2.inOut" },
            );
        }
    }, [activeIdx, periods.length]);


    return (
        <div ref={circleRef} className={cls.timeline__circle}>
            {points.map((pos, i) => {
                const isActive = activeIdx === i;
                const period = periods[i];
                const stepDeg = 360 / periods.length;
                const circleRotation = -stepDeg * activeIdx;
                const counterDeg = `${-circleRotation}deg`;

                return (
                    <React.Fragment key={String(period.id)}>
                        <button
                            style={{ left: pos.left, top: pos.top }}
                            onClick={() => onChange(i)}
                            className={classNames(cls.timeline__point, { [cls.timeline__point__active]: isActive })}
                        >
                            <p
                                className={cls.timeline__point_text}
                                style={{ transform: `rotate(${counterDeg})` }}
                            >
                                {i + 1}
                            </p>
                        </button>

                        {isActive && (
                            <div
                                className={cls.timeline__label}
                                style={{
                                    left: pos.left,
                                    top: pos.top,
                                    transform: ` translate(0, -50%) rotate(${counterDeg}) translateX(50px)`,
                                    transformOrigin: "left center",
                                }}
                            >
                                {displayedLabel}
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
