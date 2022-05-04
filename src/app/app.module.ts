import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { createCustomElement } from '@angular/elements';
import { CmpChild1Component } from './cmp-child1/cmp-child1.component';
import { CmpChild2Component } from './cmp-child2/cmp-child2.component';
import { CmpChild3Component } from './cmp-child3/cmp-child3.component';
import { CmpParentComponent } from './cmp-parent/cmp-parent.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { LibraryPageComponent } from './library-page/library-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpChild1Component,
    CmpChild2Component,
    CmpChild3Component,
    CmpParentComponent,
    SanitizeHtmlPipe,
    LibraryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzNotificationModule,
    NzDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(injector: Injector){

         const componentA = createCustomElement(CmpChild1Component, {injector});
         customElements.define('cmp-child1', componentA);

         const componentB = createCustomElement(CmpChild2Component, {injector});
         customElements.define('cmp-child2', componentB);

        const parent = createCustomElement(CmpParentComponent, {injector});
        customElements.define('cmp-parent', parent);

    }
 }
