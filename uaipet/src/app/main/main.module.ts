import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [
    PageWrapperComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PetsComponent,
    AboutComponent,
    PartnersComponent,
    AdoptionComponent,
    ControlComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class MainModule { }
