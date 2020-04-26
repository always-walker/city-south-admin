import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from '../service/service.module';
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule){
    if(parentModule){
      throw new Error('core Module only import in appmodule');
    }
  }
 }
