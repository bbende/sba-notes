import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NotesComponent} from "./notes/notes.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'notes', component: NotesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}