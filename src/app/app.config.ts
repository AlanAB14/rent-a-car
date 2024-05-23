import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestInterceptor,
    //   multi: true
    // },
    provideAnimationsAsync(),
    // importProvidersFrom(

    //   JwtModule.forRoot({
    //     config: {
    //       tokenGetter: () => {
    //         return localStorage.getItem(`tkn_${environment.app}`)
    //       },
    //       // allowedDomains: ['localhost:4200'],
    //     },
    //   }),
    // ),
    // provideHttpClient(withInterceptorsFromDi()),
  ]
};
