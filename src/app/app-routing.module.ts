import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetStoreComponent } from './components/pet-store/pet-store.component';

const routes: Routes = [
{ path: '', redirectTo: 'pet-store', pathMatch: 'full' },
{ path: 'pet-store', component: PetStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
