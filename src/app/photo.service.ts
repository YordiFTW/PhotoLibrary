import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Photo} from './photo';
import {PHOTOS} from './photo/mock-photos';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private httpclientding: HttpClient) { }

  getPhotos(){
    return PHOTOS;
  }

  getJsonPhotos(): Observable<Photo[]>
  {
    return this.httpclientding.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
  }
  

  getPhoto(id: number): Promise<Photo | undefined> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const photo = this.getJsonPhotos().toPromise().then(h => h.find(h => h.id === id));
    return photo;
  }
  }
  

