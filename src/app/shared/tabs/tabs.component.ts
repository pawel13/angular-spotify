import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabsList:TabComponent[] = []

  toggle(active:TabComponent){
    this.tabsList.forEach( tab => {
      tab.open = active == tab;
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
