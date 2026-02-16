import gsap from "gsap";
import { ANIMATION_DURATION } from "index";
import React, { useEffect, useRef } from "react";
import { classNames } from "shared/lib/classNames";
import cls from './YearsRange.module.scss'

type Props = {
    start: number;
    end: number;
};

export const YearsRange: React.FC<Props> = ({ start, end }) => {
    const startEl = useRef<HTMLSpanElement>(null);
    const endEl = useRef<HTMLSpanElement>(null);

    const prevRef = useRef<{ start: number; end: number }>({ start, end });

    useEffect(() => {
        if (startEl.current) startEl.current.textContent = String(start);
        if (endEl.current) endEl.current.textContent = String(end);

        prevRef.current = { start, end };
    }, []);

    useEffect(() => {
        const from = prevRef.current;
        const to = { start, end };

        if (from.start === to.start && from.end === to.end) return;

        const state = { s: from.start, e: from.end };

        const tl = gsap.timeline({ defaults: { duration: ANIMATION_DURATION, ease: "power2.inOut" } });

        tl.to(
            state,
            {
                s: to.start,
                e: to.end,
                onUpdate: () => {
                    if (startEl.current) startEl.current.textContent = String(Math.round(state.s));
                    if (endEl.current) endEl.current.textContent = String(Math.round(state.e));
                },
            },
            0,
        );

        prevRef.current = to;

        return () => {
            tl.kill();
        };
    }, [start, end]);

    return (
        <div className={cls.timeline__years}>
            <span ref={startEl} className={classNames(cls.timeline__year, {}, [cls.timeline__year_primary])}/>
            <span ref={endEl} className={classNames(cls.timeline__year, {}, [cls.timeline__year_secondary])}/>
        </div>
    );
};
