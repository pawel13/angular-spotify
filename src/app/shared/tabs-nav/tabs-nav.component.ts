import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss']
})
export class TabsNavComponent implements OnInit {

  @Input()
  tabs:TabsComponent[] = [];
  constructor() { }

  ngOnInit() {
  }

}
