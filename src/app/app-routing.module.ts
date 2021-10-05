import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedComponent } from './combined/combined.component';
import { MarkupcombinedComponent } from './markupcombined/markupcombined.component';
import { PhotoComponent } from './photo/photo.component';
import { SinglephotoComponent } from './singlephoto/singlephoto.component';

const routes: Routes = [
  { path: 'singlephoto/:id', component: SinglephotoComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'combined', component: CombinedComponent },
  { path: 'markup', component: MarkupcombinedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
