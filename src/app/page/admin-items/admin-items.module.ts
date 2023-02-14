import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminItemsRoutingModule } from './admin-items-routing.module';
import { AdminItemsComponent } from './admin-items.component';

@NgModule({
  declarations: [AdminItemsComponent],
  imports: [
    CommonModule,
    AdminItemsRoutingModule
  ]
})
export class AdminItemsModule { }
