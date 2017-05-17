import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ClassifierComponent } from './classifier/classifier.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ClassifierService } from './classifier.service';
import {
MdButtonModule,
MdCheckboxModule,
MdTabsModule,
MdTooltipModule,
MdAutocompleteModule,
MdInputModule,
MdSelectModule,
MdSliderModule,
MdMenuModule,
MdSidenavModule,
MdProgressBarModule,
MdDialogModule,
MdSnackBarModule
} from '@angular/material';

export const MATERIAL_IMPORTS = [
MdButtonModule,
MdCheckboxModule,
MdTabsModule,
MdTooltipModule,
MdAutocompleteModule,
MdInputModule,
MdSelectModule,
MdSliderModule,
MdMenuModule,
MdSidenavModule,
MdProgressBarModule,
MdDialogModule,
MdSnackBarModule
];



// Define the routes

const ROUTES = [
  {
    path: '',
    component: ClassifierComponent
  },
  {
    path: 'classifier',
    component: ClassifierComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClassifierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
    MATERIAL_IMPORTS
  ],
  providers: [ClassifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
