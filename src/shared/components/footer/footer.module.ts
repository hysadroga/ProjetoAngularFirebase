import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterComponent //importa os componenetes
  ],
  imports: [
    CommonModule, //importa os módulos externos
    IonicModule
  ],
  exports: [
    FooterComponent //exporta os componentes
  ]
})
export class FooterModule { }
