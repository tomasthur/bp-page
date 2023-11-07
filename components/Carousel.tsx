"use client";

import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AnimationHandler, AnimationHandlerResponse } from "react-responsive-carousel/lib/ts/components/Carousel/types";

const ReactCarousel = ({ images }: any) => {

  const fadeAnimationHandler: AnimationHandler = (props, state): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + 'ms';
    const transitionTimingFunction = 'ease-in-out';

    let slideStyle: React.CSSProperties = {
        position: 'absolute',
        display: 'block',
        zIndex: -2,
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction: transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
        slideStyle = {
            ...slideStyle,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime,
        };
    }

    return {
        slideStyle,
        selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
        prevStyle: { ...slideStyle }
    };
};

  return (
    <>
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        transitionTime={2500}
        stopOnHover
        autoFocus
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        animationHandler={fadeAnimationHandler}
        className="opacity-90 w-[100%] mt-2"
      >
        {images.map((image: any, index: any) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[80%] h-[80vh] object-cover self-center grayscale"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ReactCarousel;
