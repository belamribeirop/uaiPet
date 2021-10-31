import { ControlDialogComponent } from './animal-control/control-dialog/control-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { PageWrapperComponent } from '../shared/page-wrapper/page-wrapper.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AnimalsComponent } from './animals/animals.component';
import { UaipetComponent } from './uaipet/uaipet.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { OngsComponent } from './ongs/ongs.component';
import { AnimalControlComponent } from './animal-control/animal-control.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalDetailsComponent } from './animals/animals-details/animals-details';

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
    ControlDialogComponent,
    AnimalDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [HttpClientModule],
})
export class MainModule {}
