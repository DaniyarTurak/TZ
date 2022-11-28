import { Component } from '@angular/core';

@Component({
  selector: 'mc-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videoIcon: string = './assets/images/play.png';
  pause: boolean = false;
  videodisabled: boolean = true;

  changeImg() {
    // if (this.title == 'Play') {
    //   this.title = 'Pause';
    //   this.videoIcon = './assets/images/pause.png';
    //   this.videodisabled = false;
    // } else {
    //   this.videoIcon = './assets/images/play.png';
    //   this.title = 'Play';
    //   this.videodisabled = true;
    // }
    if (!this.pause) {
      this.pause = true;
      this.videodisabled = false;
    } else {
      this.pause = false;
      this.videodisabled = true;
    }
  }
}
