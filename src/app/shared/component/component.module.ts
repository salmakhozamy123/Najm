import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TabComponent } from './tab/tab.component';
import { InsideTabComponent } from './inside-tab/inside-tab.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    TabComponent,
    InsideTabComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports:[
    BreadcrumbComponent,
    TabComponent,
    InsideTabComponent
  ]
})
export class ComponentModule { }
