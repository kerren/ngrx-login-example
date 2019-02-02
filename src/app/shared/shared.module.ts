import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FlexLayoutModule
  ],
  exports: [
    NgZorroAntdModule,
    FlexLayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class SharedModule { }
