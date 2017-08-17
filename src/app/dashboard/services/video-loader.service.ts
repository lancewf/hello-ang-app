import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Video } from '../../shared/interfaces';
import 'rxjs/add/operator/map';

const API_URL = 'https://angularbc-lancewf.c9users.io:8081/api/videos';;

@Injectable()
export class VideoLoaderService {

  constructor(private http: Http) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get(API_URL).map(res => res.json());
  }
}
