import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { kiwiDeclarations, kiwiImports, kiwiProviders } from '@app/app.module';
import { KiwiPageModule } from '@app/kiwi-page';
import { SHARED_CUSTOM_ROUTES, SHARED_DEFAULT_ROUTES, SHARED_ENVIRONMENT } from '@sdk-ts/environment';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { ContactComponent } from './pages/contact/contact.component';

const SHARED_ENVIRONMENT_PROVIDER = {
  provide: SHARED_ENVIRONMENT,
  useFactory: () => {
    return environment;
  }
};

const SHARED_CUSTOM_ROUTES_PROVIDER = {
  provide: SHARED_CUSTOM_ROUTES,
  useFactory: () => {
    return [{
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AppAboutModule)
    },
    {
      path: 'index',
      loadChildren: () => import('./index/index.module').then(m => m.AppIndexModule)
    },
    {
      path: 'catalog',
      loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.AppCatalogModule)
    }];
  }
};

const SHARED_DEFAULT_ROUTES_PROVIDER = {
  provide: SHARED_DEFAULT_ROUTES,
  useFactory: () => {
    return [{
      path: '**',
      redirectTo: '/index',
      pathMatch: 'prefix'
    },
    {
      path: '',
      redirectTo: '/index',
      pathMatch: 'prefix'
    }];
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    ...kiwiDeclarations(),
  ],
  imports: [
    CommonModule,
    ContactComponent,
    ...kiwiImports(),
    KiwiPageModule,
  ],
  providers: [
    SHARED_ENVIRONMENT_PROVIDER,
    SHARED_CUSTOM_ROUTES_PROVIDER,
    SHARED_DEFAULT_ROUTES_PROVIDER,
    ...kiwiProviders(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
