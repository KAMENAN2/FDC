import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpViewComponent } from './help-view/help-view.component';
import { HelpersComponent } from './helpers.component';
import {RouterModule} from '@angular/router';
import {HelpersRoutes} from './helpers.routing';



@NgModule({
  declarations: [HelpViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HelpersRoutes)
  ]
})
export class HelpersModule { }
