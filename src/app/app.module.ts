import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/base/app-header/app-header.component';
import { AppNavigationComponent } from './components/base/app-navigation/app-navigation.component';
import { AppFooterComponent } from './components/base/app-footer/app-footer.component';

import { HomeModule } from './views/home/home.module';
import { AboutModule } from './views/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
