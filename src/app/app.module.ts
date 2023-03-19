import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { allUsersComponent } from './components/users/allUsers/allUsers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './config/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { UserPostsComponent } from './components/posts/user-posts/user-posts.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {usersReducer} from './components/users/state/users.reducer';
import { UserEffects } from './components/users/state/users.effects';
import { postsReducer } from './components/posts/state/posts.reducer';
import { PostsEffects } from './components/posts/state/posts.effects';
//angular material imports
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UserComponent } from './components/users/add-Edit/user/user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [
    AppComponent,
    allUsersComponent,
    UserComponent,
    UserPostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    StoreModule.forRoot({users:usersReducer,posts:postsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UserEffects,PostsEffects]),
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule ,
    MatStepperModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
