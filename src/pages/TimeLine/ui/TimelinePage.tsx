import { NavButtons } from "features/NavButtons";
import { ANIMATION_DURATION } from "index";
import React, { useMemo, useState } from "react";
import { SliderButtonDisabledState } from "shared/lib/TimeBlocks.interface";
import { PeriodCircle } from "widgets/PeriodCircle";
import { Slider } from "widgets/Slider";
import { YearsRange } from "widgets/YearsRange";
import { periods } from "../config/data";
import cls from "./TimelinePage.module.scss"
import './TimelinePage.css'

export const TimelinePage: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [displayedLabel, setDisplayedLabel] = useState(periods[0].title);

    const [navDisabledState, setNavDisabledState] = useState<SliderButtonDisabledState>(null);

    const changeIdx = (idx: number, moveDirection?: SliderButtonDisabledState) => {
        setDisplayedLabel('')
        setActiveIdx((idx + periods.length) % periods.length)
        setNavDisabledState(moveDirection)

        setTimeout((activeIdx) => {
            setDisplayedLabel(periods[activeIdx].title)

            setNavDisabledState(null)
        }, ANIMATION_DURATION * 1000, idx)
    };
    const active = periods[activeIdx];

    const minYear = useMemo(() => {
        return Math.min(...active.events.map((e) => Number(e.year)));
    }, [active.events])

    const maxYear = useMemo(() => {
        return Math.max(...active.events.map((e) => Number(e.year)));
    }, [active.events])

    return (
        <section className={cls.timeline}>
            <div className={cls.timeline__side}>
                <div className={cls.timeline__bar}>
                    <h2 className={cls.timeline__heading}>
                        Исторические даты
                    </h2>
                </div>
            </div>

            {/* visual block */}
            <div className={cls.timeline__visual}>
                <PeriodCircle
                    periods={periods}
                    activeIdx={activeIdx}
                    onChange={changeIdx}
                    displayedLabel={displayedLabel}
                />
                <YearsRange
                    start={minYear}
                    end={maxYear}
                />
            </div>

            <div className={cls.navButtonsContainer}>
                <div className={cls.group}>
                    <span className={cls.fraction_pagination}>
                        {`0${activeIdx + 1}/0${periods.length}`}
                    </span>

                    {/* desktop nav */}
                    <NavButtons
                        onPrev={() => changeIdx(activeIdx - 1, 'left')}
                        onNext={() => changeIdx(activeIdx + 1, "right")}
                        currentIdx={activeIdx}
                        navDisabledState={navDisabledState}
                        maxIdx={periods.length}
                    />
                </div>
                <Slider
                    events={periods[activeIdx].events}
                />
            </div>
        </section>
    );
};
