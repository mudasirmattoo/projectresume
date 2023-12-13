import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './MyComponents/form/form.component';
import { MainComponent } from './MyComponents/main/main.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AppComponent,
    FormComponent,
    MainComponent,
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [  ],

})
export class AppModule {

}
