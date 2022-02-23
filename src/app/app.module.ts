import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth';
import { AdminPageComponent } from './admin/containers';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider'; 
import { NgReduxModule } from '@angular-redux/store'; 
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/store/auth/effects/auth.effects';
import { AuthService } from 'src/api/services';
import { ApiModule } from 'src/api/api.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from 'src/store/state';
import { metaReducers } from 'src/store/state';

export const EFFECTS = [
  AuthEffects
];

@NgModule({
  declarations: [
    AppComponent, LoginPageComponent, AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    NgReduxModule,
    EffectsModule.forRoot(EFFECTS),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'jakiś name'
    }),
    ApiModule.forRoot({rootUrl: 'https://localhost:8080'}),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
