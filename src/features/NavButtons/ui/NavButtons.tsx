import React from "react";
import GreaterIcon from 'shared/assets/greater_icon.svg'
import LessIcon from 'shared/assets/less_icon.svg'
import { classNames } from "shared/lib/classNames";
import { SliderButtonDisabledState } from "shared/lib/TimeBlocks.interface";
import cls from "./NavButtons.module.scss"

type Props = {
    onPrev: () => void;
    onNext: () => void;
    currentIdx: number;
    maxIdx: number;
    navDisabledState?: SliderButtonDisabledState
    children?: React.ReactNode;
    variant?: "inline" | "overlay";
    ButtonsClassName?: string;
};

export const NavButtons: React.FC<Props> = ({
    onPrev,
    onNext,
    currentIdx,
    maxIdx,
    navDisabledState,
    children,
    variant = "inline",
    ButtonsClassName,
}) => {
    const atStart = currentIdx <= 0 || navDisabledState === "left" || navDisabledState === "both";
    const atEnd = currentIdx >= maxIdx - 1 || navDisabledState === "right" || navDisabledState === "both";

    return (
        <div
            className={[
                cls.navRoot,
                variant === "overlay" ? cls.overlay : cls.inline,
            ].filter(Boolean).join(" ")}
        >
            <button
                type="button"
                onClick={onPrev}
                disabled={atStart}
                className={classNames(cls.prevBtn, {}, [ButtonsClassName])}
            >
                <LessIcon/>
            </button>

            {!!children && (
                <div className={cls.content}>
                    {children}
                </div>
            )}

            <button
                type="button"
                onClick={onNext}
                disabled={atEnd}
                className={classNames(cls.nextBtn, {}, [ButtonsClassName])}
            >
                <GreaterIcon/>
            </button>
        </div>
    );
};
