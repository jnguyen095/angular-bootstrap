import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from "../dashboard/dashboard.component";
import { TopicAddComponent } from "../topic-add/topic-add.component";
import { EventAddComponent } from "../event-add/event-add.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'topic',
    component: TopicAddComponent,
  },
  {
    path: 'topic/:id',
    component: TopicAddComponent,
  },
  {
    path: 'event',
    component: EventAddComponent,
  },
  {
    path: 'event/:id',
    component: EventAddComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
