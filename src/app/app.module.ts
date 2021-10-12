import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DiskdetailComponent } from './diskdetail/diskdetail.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DiskdetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
