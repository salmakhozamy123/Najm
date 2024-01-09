import { Component } from '@angular/core';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

type Report = {
  reportNo: string;
  reportType: string;
  reportDate: string;
  reportAge: string;
  country: string;
  adminst: string;
  status: string;
};


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  reports:Report[] = [
    {reportNo:'# 123',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
    {reportNo:'# 124',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مغلقة'},
    {reportNo:'# 125',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 126',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مقبول'},
    {reportNo:'# 127',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مرفوض'},
    {reportNo:'# 128',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 129',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
  ]
  first: number = 0;
  rows: number = 2;
  pageCount: number = Math.ceil(this.reports.length / this.rows);
  activePage: number = 1;
  isActive: boolean = false;

  getPaginatedReports(): Report[] {
    const startIndex = this.first;
    const endIndex = startIndex + this.rows;
    return this.reports.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    if (event.page !== undefined) {
      this.activePage = event.page + 1; // +1 because the page numbers are 0-indexed
    }
    if (event.first !== undefined && event.page !== undefined) {
      this.first = event.first;
      this.activePage = event.page + 1;
      const x = document.getElementsByClassName('.p-paginator-pages .p-element');
    }
    if (event.rows !== undefined) {
      this.rows = event.rows;
      this.pageCount = Math.ceil(this.reports.length / this.rows);
    }
  }
}
