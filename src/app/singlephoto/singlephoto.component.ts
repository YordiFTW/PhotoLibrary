import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo';
import { ThrowStmt } from '@angular/compiler';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-singlephoto',
  templateUrl: './singlephoto.component.html',
  styleUrls: ['./singlephoto.component.scss']
})
export class SinglephotoComponent implements OnInit {
  photos: Photo[] = [];
  photo: Photo = {id: 1, title: "1", url: "1", thumbnailUrl: "1", albumId: 1};
  id: number = 0;

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPhoto();
    
  }

  getPhoto(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.photoService.getPhoto(this.id)
      .then(photo => this.photo = photo||{id: 1, title: "1", url: "1", thumbnailUrl: "1", albumId: 1});
  }

  Onclick()
  {
    window.location.href = "http://localhost:4200";
  }

}
