import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { UsersService } from './users.service';
import { LoaderService } from './loader.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    ErrorPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [UsersService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
