import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../api.service';

const routes: Routes = [{ path: '', component: StudentComponent }];

@NgModule({
  declarations: [StudentComponent],
  imports: [RouterModule.forChild(routes), CommonModule, StudentRoutingModule],
  providers: [ApiService],
})
export class StudentModule {}
