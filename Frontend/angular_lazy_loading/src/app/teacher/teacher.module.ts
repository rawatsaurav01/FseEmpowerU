import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../api.service';

const routes: Routes = [{ path: '', component: TeacherComponent }];

@NgModule({
  declarations: [TeacherComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TeacherRoutingModule],
  providers: [ApiService],
})
export class TeacherModule {}
