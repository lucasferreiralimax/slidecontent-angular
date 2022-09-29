import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { SlideItemComponent } from './components/slide-item/slide-item.component';

import { SlideHeaderComponent } from './components/slide-header/slide-header.component';
import { SlideNavComponent } from './components/slide-nav/slide-nav.component';
import { SlideFooterComponent } from './components/slide-footer/slide-footer.component';

import { HomeModule } from './views/home/home.module';
import { AboutModule } from './views/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    SlideFooterComponent,
    SlideHeaderComponent,
    SlideNavComponent
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
