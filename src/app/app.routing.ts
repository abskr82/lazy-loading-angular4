import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
//   { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'lazy', loadChildren: '/home/abhishek/programming/angular4/lazy-loading/lazy2/src/app/lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
