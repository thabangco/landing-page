import { Component, OnInit } from '@angular/core';
import {
   SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  index: number;
  carousel: object = [
    { id: 1, title: 'Mobile internet', action: 'Shop Now' },
    { id: 2, title: 'Home internet', action: 'Shop Now' },
    { id: 3, title: 'Get a device', action: 'Start here' },
    { id: 4, title: 'Add a phone-line', action: 'Start here' },
    { id: 5, title: 'Upgrade', action: 'Start here' }

  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    initialSlide: 2,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },

    breakpoints: {
      1080: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: true,

      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,

      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  indexChange(index: number) {
    console.log(`index: ${index}`);
  }
}
