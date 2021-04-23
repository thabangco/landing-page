import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwiperConfigInterface, SWIPER_CONFIG, SwiperModule} from 'ngx-swiper-wrapper';
import { CarouselComponent } from './components/carousel/carousel.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
