import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GdatosComponent } from './gdatos/gdatos.component';
import { QRComponent } from './qr/qr.component';
import { ListregComponent } from './listreg/listreg.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'gdatos',
    component: GdatosComponent
  },
  {
    path: 'genQR',
    component: QRComponent,
  },
  {
    path: 'GenListaregistro',
    component: ListregComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
