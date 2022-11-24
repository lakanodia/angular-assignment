import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './features/users/users.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './features/components/header/header.component';
import { SharedModule } from './features/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestLoggerService } from './features/shared/interceptors/request-logger.service';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestLoggerService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
