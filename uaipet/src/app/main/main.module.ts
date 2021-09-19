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
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalsComponent } from './animals/animals.component';
import { UaipetComponent } from './uaipet/uaipet.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { OngsComponent } from './ongs/ongs.component';
import { AnimalControlComponent } from './animal-control/animal-control.component';
import { MyAnimalsComponent } from './my-animals/my-animals.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PageWrapperComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AnimalsComponent,
    UaipetComponent,
    AdoptionComponent,
    OngsComponent,
    AnimalControlComponent,
    MyAnimalsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class MainModule {}
