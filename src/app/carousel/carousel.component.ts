import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import 'src/app/jquery.carousel.d.ts';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  ngOnInit(): void {
    $(document).ready(() => {
      (<any>$('.carousel')).carousel();
    });
  }
  onMouseEnter() {
    // Pause the scrolling animation
    const marquee = document.querySelector('.marquee') as HTMLElement;
    marquee.style.animationPlayState = 'paused';
  }

  onMouseLeave() {
    // Resume the scrolling animation
    const marquee = document.querySelector('.marquee') as HTMLElement;
    marquee.style.animationPlayState = 'running';
  }
}
