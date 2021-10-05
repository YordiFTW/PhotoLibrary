import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoLibrary4';
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos();
  }
}

