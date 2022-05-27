import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { SlideItemComponent } from './components/slide-item/slide-item.component';
import { SlideFooterComponent } from './components/slide-footer/slide-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideContentComponent,
    SlideItemComponent,
    SlideFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
