import { Component, OnInit, ViewChild } from "@angular/core";

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from "ngx-swiper-wrapper";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public show: boolean = true;

  public slides = [
    { title: 'Mobile internet', actionButton: 'Shop Now' },
    { title: 'Home internet', actionButton: 'Shop Now' },
    { title: 'Get a device', actionButton: 'Start here' },
    { title: 'Add a phone-line', actionButton: "Learn more" },
    { title: 'Upgrade', actionButton: 'Start here' }
  ];

  public type: string = "component";

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: "horizontal",
    slidesPerView: 5,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: false,
    initialSlide: 2,
    breakpoints: {
      640: {
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 5
      },
      480: {
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 5
      },
      320: {
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 3
      }
    }
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor() { }

  ngOnInit(): void {  }

  public onIndexChange(index: number) {
    console.log("Swiper index: ", index);
  }
}