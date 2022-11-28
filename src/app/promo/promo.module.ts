import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PromoComponent } from './components/promo/promo.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { VideoComponent } from './components/video/video.component';

const routes = [
  {
    path: '',
    component: PromoComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PromoComponent, SlideshowComponent, VideoComponent],
})
export class PromoModule {}
