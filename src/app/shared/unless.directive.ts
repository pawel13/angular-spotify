import { Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input()
  set appUnless(hide:boolean){
    if(!hide){
      this.vcr.createEmbeddedView(
        this.tpl,
        {
          message: 'placki',
          $implicit: 'Ala ma kota'
        }, this.vcr.length
      );
    }
  }
  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    ) { 
  }



}
