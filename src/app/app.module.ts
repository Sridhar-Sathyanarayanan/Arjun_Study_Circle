import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './forms/button/button.component';
import { LearnComponent } from './learn/learn.component';
import { BreadcrumbComponent } from './forms/breadcrumb/breadcrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './forms/cards/cards.component';
import { NotFoundComponent } from './forms/notfound/notfound.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticeTopicComponent } from './practice/practicetopic/practicetopic.component';
import { PracticeSetComponent } from './practice/practiceset/practiceset.component';
import { RadioComponent } from './forms/radio/radio.component';
import { LearnTopicComponent } from './learn/learntopic/learntopic.component';
import { UpcomingExamsComponent } from './exams/upcoming-exams/upcoming-exams.component';
import { GridComponent } from './forms/grid/grid.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonComponent,
    LearnComponent,
    BreadcrumbComponent,
    CardsComponent,
    NotFoundComponent,
    PracticeComponent,
    PracticeTopicComponent,
    ButtonComponent,
    PracticeSetComponent,
    RadioComponent,
    LearnTopicComponent,
    UpcomingExamsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatTableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

