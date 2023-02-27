import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { PrimengModule } from './core/primeng/primeng.module';
import { Page404Component } from './core/page404/page404.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { DemoComponent } from './modules/module1/components/demo/demo.component';

@NgModule({
  declarations: [AppComponent, Page404Component, DemoComponent],
  imports: [
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LayoutsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
