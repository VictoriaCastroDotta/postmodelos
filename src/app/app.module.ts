import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './../app/components/hotel/hotel.component';
import { ViajerosComponent } from './../app/components/viajeros/viajeros.component';

@NgModule({
  declarations: [AppComponent, HotelComponent, ViajerosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
