import { Component, OnInit } from '@angular/core';
import { data } from './../data';
import { Video } from '../../shared/interfaces';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videoList = data;
  selectedVideo: Video;
  selectedVideos: Video[];

  constructor() { }

  ngOnInit() {
  }

}
