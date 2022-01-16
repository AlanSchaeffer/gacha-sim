import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GachaConfigComponent } from './config/gacha-config/gacha-config.component';
import { HomeComponent } from './home/home.component';
import { SimulatorComponent } from './simulation/simulator/simulator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'config', component: GachaConfigComponent},
  {path: 'simulation', component: SimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
