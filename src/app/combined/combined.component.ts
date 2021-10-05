import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss']
})
export class CombinedComponent implements OnInit {
  photos: Photo[] = [];
  photo: Photo = {id: 1, title: "1", url: "1", thumbnailUrl: "1", albumId: 1};
  id: number = 0;
  showcolumnleft: boolean = false;
  showcolumnright: boolean = false;

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.photoService.getJsonPhotos().subscribe(photos => this.photos = photos);
  }

  

  getPhoto(idtest: number): void {
    this.showcolumnleft = true;
    this.id = idtest;
    this.photoService.getPhoto(this.id)
      .then(photo => this.photo = photo||{id: 1, title: "1", url: "1", thumbnailUrl: "1", albumId: 1});
      
  }

}
