import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsNavComponent } from '../tabs-nav/tabs-nav.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  tabsList:TabComponent[] = []

  @ViewChild('navRef')
  navRef: TabsNavComponent;

  toggle(active:TabComponent){
    this.tabsList.forEach( tab => {
      tab.open = active == tab;
    })
  }
  constructor() { }

  ngOnInit() {
    console.log('tabs onInit', this.navRef.tabs);

  }
  
  ngAfterViewInit(){
    console.log('tabsAfterViewInit', this.navRef.tabs);
  }

}
