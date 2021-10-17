import { AnimalsComponent } from './animals/animals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { OngsComponent } from './ongs/ongs.component';
import { UaipetComponent } from './uaipet/uaipet.component';
import { AnimalControlComponent } from './animal-control/animal-control.component';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'adoption', component: AdoptionComponent },
      { path: 'ongs', component: OngsComponent },
      { path: 'uaipet', component: UaipetComponent },
      { path: 'control', component: AnimalControlComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
