import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';//
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';//
import { AngularFireModule } from '@angular/fire/compat';//
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {FormsModule} from '@angular/forms';
import {NgFor } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { RoomComponent } from './room/room.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailComponent } from './penguin-detail/penguin-detail.component';
import { PenguinNotFoundComponent } from './error/penguin-not-found/penguin-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    PenguinListComponent,
    PenguinDetailComponent,
    PenguinNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    //angular material
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgFor,
    MatSelectModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
