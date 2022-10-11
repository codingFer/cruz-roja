import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeekComponent} from './week/week.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {PlannerComponent} from './planner/planner.component';


@NgModule({
  declarations: [WeekComponent, PlannerComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule {
}
