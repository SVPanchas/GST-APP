import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
