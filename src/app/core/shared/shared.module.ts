import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { AppMenuitemComponent } from './menu/app.menuitem.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AppMenuitemComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule
  ],
  exports: [FooterComponent, HeaderComponent, MenuComponent],
})
export class SharedModule {}
