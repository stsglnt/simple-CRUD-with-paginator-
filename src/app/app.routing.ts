import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppConfig} from '@core/config';


const routes: Routes = [
  {path: '',  redirectTo: AppConfig.routes.posts, pathMatch: 'full'},
  {path: AppConfig.routes.posts, loadChildren: './main/posts/posts.module#PostsModule'},
  {path: '**', redirectTo: AppConfig.routes.posts}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
