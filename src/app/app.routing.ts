import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
