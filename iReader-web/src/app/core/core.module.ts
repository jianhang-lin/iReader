import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeadComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  // load core only one time
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core模块已经存在，不能再次加载!');
    }
  }
}
