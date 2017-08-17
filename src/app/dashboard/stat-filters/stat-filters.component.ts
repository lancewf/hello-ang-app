import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

interface StatFilter{
  search: string;
  startDate: Date;
}
@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {

  @Input() list: Observable<Video[]>;
  @Output() selectedVideos = new EventEmitter<Video[]>();
  statFiltersFormGroup: FormGroup;
  filterdVideos:Video[];

  constructor(fb: FormBuilder) {
    this.statFiltersFormGroup = fb.group({
      search: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  filterVideos() {
    let statFilter: StatFilter = this.statFiltersFormGroup.value;
    console.info(statFilter);

    this.list.subscribe( (videos:Video[]) =>{
      this.filterdVideos = videos.filter( video => video.title.indexOf(statFilter.search) > -1  &&
        video.viewDetails.some(detail => detail.date >= statFilter.startDate));

      console.info(this.filterdVideos.length);
      this.selectedVideos.emit(this.filterdVideos);
    });
  }

}
