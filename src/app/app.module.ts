import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { colorReducer } from './reducers/colors.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomePageOneComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    MenuComponent,
    HomePageTwoComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ color: colorReducer }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
