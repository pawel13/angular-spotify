import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [HighlightDirective, UnlessDirective, CardComponent, TabsComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, UnlessDirective, CardComponent, TabsComponent, TabComponent]
})
export class SharedModule { }
