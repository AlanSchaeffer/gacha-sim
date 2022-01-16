import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GachaConfigComponent } from './config/gacha-config/gacha-config.component';
import { PrizesListComponent } from './config/gacha-config/prizes-list/prizes-list.component';
import { PrizeComponent } from './config/gacha-config/prizes-list/prize/prize.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SimulatorComponent } from './simulation/simulator/simulator.component';
import { SimulatorResultsComponent } from './simulation/simulator/simulator-results/simulator-results.component';
import { SimulatorPlayerComponent } from './simulation/simulator/simulator-results/simulator-player/simulator-player.component';
import { MainDialogComponent } from './modal/main-dialog/main-dialog.component';
import { SimulatorPlayerDetailsComponent } from './simulation/simulator/simulator-results/simulator-player-details/simulator-player-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GachaConfigComponent,
    PrizesListComponent,
    PrizeComponent,
    MenuComponent,
    HomeComponent,
    SimulatorComponent,
    SimulatorResultsComponent,
    SimulatorPlayerComponent,
    MainDialogComponent,
    SimulatorPlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
