import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { SlideItemComponent } from './components/slide-item/slide-item.component';
import { SlideFooterComponent } from './components/slide-footer/slide-footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SlideHeaderComponent } from './components/slide-header/slide-header.component';
import { SlideNavComponent } from './components/slide-nav/slide-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideContentComponent,
    SlideItemComponent,
    SlideFooterComponent,
    HomeComponent,
    AboutComponent,
    SlideHeaderComponent,
    SlideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
