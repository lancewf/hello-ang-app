import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../../shared/interfaces';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {

  @Input() list: Video[];
  @Output() selectedVideos = new EventEmitter<Video[]>();

  constructor() { }

  ngOnInit() {

  }

  filterVideos() {
    this.selectedVideos.emit(this.list.filter( (video:Video) => video));
  }

}
