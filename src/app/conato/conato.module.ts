import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConatoPageRoutingModule } from './conato-routing.module';

import { ConatoPage } from './conato.page';
import { HeaderModule } from 'src/shared/components/header/header.module';
import { FooterModule } from 'src/shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConatoPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [ConatoPage]
})
export class ConatoPageModule {}
