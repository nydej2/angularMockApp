import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import {routingComponent, appRouting} from "./routing";
import {APP_BASE_HREF} from "@angular/common";
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    ShowErrorComponent,
    DashboardComponent,
    SettingsComponent,
    AboutComponent,
    TasksComponent,
    TaskListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule, FormsModule, appRouting
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/poject-manager/'}
    ],
  bootstrap: [AppComponent, routingComponent]
})
export class AppModule { }
