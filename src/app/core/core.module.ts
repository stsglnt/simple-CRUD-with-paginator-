import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '@core/interceptor';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
