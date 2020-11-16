import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './app-components/landing-page/landing-page.component';
import {FiltersComponent} from './app-components/filters/filters.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'filters', component: FiltersComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
