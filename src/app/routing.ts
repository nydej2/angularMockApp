/**
 * Created by Jonas on 23.08.2018.
 */
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {AboutComponent} from "./about/about.component";
import {FirstFormComponent} from "./first-form/first-form.component";
import {tasksRoutes, tasksRoutingComponents} from "./tasks/task-routing.component";

export const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'someTitle', component: FirstFormComponent},
  ...tasksRoutes
];

export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponent = [
  DashboardComponent, SettingsComponent, AboutComponent, FirstFormComponent,
  ...tasksRoutingComponents];

