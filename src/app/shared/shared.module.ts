import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NgZorroAntdModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class SharedModule { }
