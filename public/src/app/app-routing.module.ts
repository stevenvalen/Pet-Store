import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component: InfoComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
