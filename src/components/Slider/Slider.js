import React from "react";
import "./Slider.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Banner = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <div className="slider-image first">
            <div className="slide-button-group">
              <ButtonBack className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonBack>
              <ButtonNext className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonNext>
            </div>
          </div>
        </Slide>

        <Slide index={1}>
          <div className="slider-image second">
            <div className="slide-button-group">
              <ButtonBack className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonBack>
              <ButtonNext className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonNext>
            </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="slider-image three">
            <div className="slide-button-group">
              <ButtonBack className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonBack>
              <ButtonNext className="slide-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </ButtonNext>
            </div>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Banner;
