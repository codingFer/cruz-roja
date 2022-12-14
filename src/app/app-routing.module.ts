import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar-routing.module').then(m => m.CalendarRoutingModule)
  },
  {
    path: '/calendar/week',
    redirectTo: '/calendar/week',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/calendar/week',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/calendar/week', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
