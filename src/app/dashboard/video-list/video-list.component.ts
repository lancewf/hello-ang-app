import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../shared/interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() list: Video[];

  @Output() select = new EventEmitter<Video>();

  constructor() { 
    
  }
  
  selectVideo(video:Video) {
    this.select.emit(video)
  }

  ngOnInit() {

  }

}
