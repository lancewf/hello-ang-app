import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../shared/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() list: Observable<Video[]>;

  @Output() select = new EventEmitter<Video>();

  constructor() { 
    
  }
  
  selectVideo(video:Video) {
    this.select.emit(video)
  }

  ngOnInit() {

  }

}
