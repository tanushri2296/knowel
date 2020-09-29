import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



const CarouselComp = (props) => {
  const {items,onDragOver,onDrop,onDragStart} = props.slidedata;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items && items.map((item,i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <img src={item.src} onDragStart = {(e) => onDragStart(e, i)} draggable className="img-fluid" alt={item.altText} />
        <CarouselCaption captionText={`Slide ${i+1}`} captionHeader={`Slide ${i+1}`} />
      </CarouselItem>
    );
  });
  return (
    <div onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>{onDrop(e, "carousel")}} >
    {items ?
    <Carousel
      activeIndex={activeIndex == items.length ? 0 : activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
       {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />     
    </Carousel>
    : <div>Loading</div>
    }
    </div>
  )
}

export default CarouselComp;