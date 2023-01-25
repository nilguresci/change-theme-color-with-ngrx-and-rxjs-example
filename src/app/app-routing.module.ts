import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageOneComponent },
  { path: 'homePageTwo', component: HomePageTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
