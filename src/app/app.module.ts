import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FiltersComponent} from './app-components/filters/filters.component';
import {LandingPageComponent} from './app-components/landing-page/landing-page.component';
import {RangeArrayCreatorPipe} from './app-pipes/range-array-creator.pipe';
import {CardContainerComponent} from './app-components/card-container/card-container.component';
import {AppCardsComponent} from './app-components/app-cards/app-cards.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    LandingPageComponent,
    RangeArrayCreatorPipe,
    CardContainerComponent,
    AppCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
