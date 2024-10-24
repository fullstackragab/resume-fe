import { Routes } from '@angular/router';
import { EnhanceCvComponent } from './pages/enhance-cv/enhance-cv.component';

export const routes: Routes = [
  { path: '', redirectTo: 'enhance-cv', pathMatch: 'full' },
  {
    path: 'enhance-cv',
    component: EnhanceCvComponent,
    title: 'Enhance CV - Gemini',
  },
];
