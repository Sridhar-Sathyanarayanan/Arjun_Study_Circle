import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { LearnComponent } from './learn/learn.component';
import { NotFoundComponent } from './forms/notfound/notfound.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticeTopicComponent } from './practice/practicetopic/practicetopic.component';
import { PracticeSetComponent } from './practice/practiceset/practiceset.component';
import { LearnTopicComponent } from './learn/learntopic/learntopic.component';
import { UpcomingExamsComponent } from './exams/upcoming-exams/upcoming-exams.component';
import { QuotesResolver } from './api.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, resolve: { quotes: QuotesResolver } },
  { path: 'reasoning', redirectTo: 'reasoning/learn', pathMatch: 'full' },
  {
    path: 'reasoning',
    children: [
      {
        path: 'learn',
        component: LearnComponent
      },
      {
        path: 'practice',
        component: PracticeComponent,
      },
      {
        path: 'learn/:topic',
        component: LearnTopicComponent,
      },
      {
        path: 'practice/:topic',
        component: PracticeTopicComponent,
      },
      {
        path: 'practice/:topic/:id',
        component: PracticeSetComponent
      }
    ]
  },
  { path: 'quantitative-aptitude', redirectTo: 'quantitative-aptitude/learn', pathMatch: 'full' },
  {
    path: 'quantitative-aptitude',
    children: [
      {
        path: 'learn',
        component: LearnComponent
      },
      {
        path: 'practice',
        component: PracticeComponent,
      },
      {
        path: 'learn/:topic',
        component: LearnTopicComponent,
      },
      {
        path: 'practice/:topic',
        component: PracticeTopicComponent,
      }
    ]
  },
  { path: 'upcoming-exams', component: UpcomingExamsComponent },
  { path: '**', component: NotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
