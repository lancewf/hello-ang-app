import { Component, OnInit } from '@angular/core';
import { Video } from '../../shared/interfaces';
import { Http } from '@angular/http';
import { VideoLoaderService } from '../services/video-loader.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  videoList: Observable<Video[]>;
  selectedVideo: Video;
  selectedVideos: Video[];

  constructor(private http:Http, 
    private videoLoaderService:VideoLoaderService) { }

  ngOnInit() {
    this.videoList = this.videoLoaderService.loadVideos();
  }

}
