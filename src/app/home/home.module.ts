import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { QRComponent } from './qr/qr.component';
import { ListregComponent } from './listreg/listreg.component';
import { GdatosComponent } from './gdatos/gdatos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    QRComponent,
    ListregComponent,
    GdatosComponent
  ]
})
export class HomePageModule {}
