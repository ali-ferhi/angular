import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SecurityModule } from './security/security.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SecurityModule)
  .catch(err => console.error(err));
