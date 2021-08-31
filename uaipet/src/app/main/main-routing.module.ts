import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { PartnersComponent } from './partners/partners.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', component: PageWrapperComponent, children: [
    { path:'', component: HomeComponent},
    { path:'pets', component: PetsComponent},
    { path:'about', component: AboutComponent},
    { path:'partners', component: PartnersComponent},
    { path:'adoption', component: AdoptionComponent},
    { path:'control', component: ControlComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
