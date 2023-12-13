import { FormComponent } from './MyComponents/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './MyComponents/main/main.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FooterComponent } from './MyComponents/footer/footer.component';


export const routes: Routes = [
 
  { path: 'create', component: FormComponent},
  { path: 'home', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: FooterComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }