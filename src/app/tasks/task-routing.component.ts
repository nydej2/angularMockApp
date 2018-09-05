import {Route} from '@angular/router';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list/task-list.component';
import {EditTaskComponent} from './edit-task/edit-task.component';

export const tasksRoutes = [
  {path: 'tasks', component: TasksComponent,
  children: [
    {path: '', component: TaskListComponent},
    {path: 'edit/:id', component: EditTaskComponent},
    {path: 'new', component: EditTaskComponent}
    ]}
  ];

export const tasksRoutingComponents = [ TasksComponent, TaskListComponent, EditTaskComponent];
