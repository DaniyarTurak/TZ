import { Component, Input, OnInit } from '@angular/core';
import { PromoService } from '../../services/promo.service';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'mc-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  autoslide = false;
  slideInterval = 3000;
  selectedIndex = 0;
  quotes = [];

  constructor(private promoService: PromoService) {}

  ngOnInit(): void {
    this.promoService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes.filter((quote) => quote.text.length < 50);
      this.quotes.sort(() => 0.5 - Math.random());
      this.quotes = this.quotes.slice(0, 5);
    });

    if (this.autoslide) {
      this.autoSlide();
    }
  }

  // sets index of image on dot/indicator click
  selectQuote(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.quotes.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.quotes.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  autoSlide(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
}
