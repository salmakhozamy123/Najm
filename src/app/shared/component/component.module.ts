import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ComponentRoutingModule } from './component-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TabComponent } from './tab/tab.component';
import { InsideTabComponent } from './inside-tab/inside-tab.component';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    TabComponent,
    InsideTabComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    PaginatorModule,
    TableModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  exports:[
    BreadcrumbComponent,
    TabComponent,
    InsideTabComponent,
    TableComponent
  ]
})
export class ComponentModule { }
