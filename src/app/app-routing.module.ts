import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  { path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  { path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumModule)
  },
  { path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  { path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  { path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then(m => m.RecipeModule)
  },
  { path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouriteModule),
    canActivate: [AuthGuard]
  },
  { path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then(m => m.RecipeModule)
  },
  { path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
