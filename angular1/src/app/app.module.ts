import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './root/root.component';
import { EventComponent } from './event/event.component';
import { DirectiveComponent } from './directive/directive.component';
import { TextDirective } from './directive/text.directive';
import { PipeComponent } from './pipe/pipe.component';
import { SqrtPipe } from './pipe/sqrt.pipe';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    RootComponent,
    EventComponent,
    DirectiveComponent,
    TextDirective,
    PipeComponent,
    SqrtPipe
  ],
  bootstrap: [RootComponent],
  providers: []
})
export class AppModule { }
