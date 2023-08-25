import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormComponent } from './components/form/form.component';
import { TaskComponent } from './components/task/task.component';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    FilterTasksPipe,
    AppComponent,
    MainPageComponent,
    FormPageComponent,
    FormComponent,
    TaskComponent,
    NotFoundPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
