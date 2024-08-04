import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { IssuesListComponent } from './issues-list/issues-list.component';

// Implement the routes for all components
// Add route where base path has to be redirected to 'addissue'
const routes: Routes = [
  {path: 'addissue', component: IssueComponent},
  {path: 'issueslist', component: IssuesListComponent},
  {path: '', redirectTo: '/addissue', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

// AppRoutingModule is responsible for routing to all the components
export class AppRoutingModule { }
