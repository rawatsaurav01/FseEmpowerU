import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // add a route for the students component that uses the path 'students' and the loadChildren method to load the StudentModule
  {},
  // add a route for the teachers component that uses the path 'teachers' and the loadChildren method to load the TeacherModule
  {},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
