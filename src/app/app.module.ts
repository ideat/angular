import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GeolocationService} from './geolocation.service';
import {DataService} from './data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule} from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path : '', component: ListComponent},
  { path : 'coffee', component: CoffeeComponent},
  { path : 'coffee/:id', component: CoffeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocationService,
              DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
