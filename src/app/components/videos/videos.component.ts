import { Component, OnInit } from '@angular/core';
import { VIDEOS } from './../../videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  videos = VIDEOS;

}
