import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeekComponent} from './week/week.component';
import {PlannerComponent} from './planner/planner.component';

const routes: Routes = [
  {
    path: 'week',
    component: WeekComponent
  }, {
    path: 'planner',
    component: PlannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
