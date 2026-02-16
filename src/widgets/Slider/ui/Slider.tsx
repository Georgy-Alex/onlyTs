// Slider.tsx
import React, { useRef, useState } from "react";
import { SliderButtonDisabledState, TimeBlocksEvent } from "shared/lib/TimeBlocks.interface";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavButtons } from "features/NavButtons";
import cls from "./Slider.module.scss";

type Props = {
    events: TimeBlocksEvent[];
};
export const Slider: React.FC<Props> = ({ events }) => {
    const swiperRef = useRef<SwiperInstance>(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [navDisabledState, setNavDisabledState] = useState<SliderButtonDisabledState>(null);

    const updateNavState = (swiper: SwiperInstance) => {
        const locked = (swiper as any).isLocked ?? false;

        const lastSnapIdx = Math.max(0, swiper.snapGrid.length - 1);

        const prev = locked || swiper.snapIndex <= 0 || swiper.isBeginning;
        const next = locked || swiper.snapIndex >= lastSnapIdx || swiper.isEnd;

        console.log(locked, prev, next);

        if (prev && !next)
            setNavDisabledState("left");
        else if (next && !prev)
            setNavDisabledState("right");
        else if (next && prev)
            setNavDisabledState("both");
        else
            setNavDisabledState(null);
    };

    return (
        <NavButtons
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            currentIdx={currentIdx}
            navDisabledState={navDisabledState}
            maxIdx={events.length}
            ButtonsClassName={cls.navButtons}
        >
            <Swiper
                key={events.map(item => item.id).join('')}
                modules={[Navigation, Pagination]}
                className={cls.timeline__swiper}
                navigation={{
                    prevEl: '.' + cls.swiper__button_prev,
                    nextEl: '.' + cls.swiper__button_next,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setCurrentIdx(swiper.activeIndex);
                    updateNavState(swiper);
                }}
                onSlideChange={(swiper) => {
                    setCurrentIdx(swiper.activeIndex);
                    updateNavState(swiper);
                }}
                spaceBetween={16}
                pagination={{
                    el: '.' + cls.swiper__pagination,
                    clickable: true,
                }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    640: { slidesPerView: 3, spaceBetween: 8 },
                    1024: { slidesPerView: 3, spaceBetween: 10 },
                    1280: { slidesPerView: 4, spaceBetween: 16 },
                    2048: { slidesPerView: 5, spaceBetween: 24 },
                    2500: { slidesPerView: 6, spaceBetween: 32 },
                }}
                loop={false}
            >
                {events.map(evt => (
                    <SwiperSlide key={evt.id + evt.year.toString()} className="timeline__side">
                        <h3 className={cls.timeline__event_title}>{evt.year}</h3>
                        <p className={cls.timeline__event_desc}>{evt.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Pagination */}
            <div className={cls.swiper__pagination}></div>
        </NavButtons>
    );
};
