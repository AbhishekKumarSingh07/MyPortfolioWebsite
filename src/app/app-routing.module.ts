import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  {path:'',component:MyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
