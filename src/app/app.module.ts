import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NameTileComponent } from './name-tile/name-tile.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';
import { AddPersonModalComponent } from './add-person-modal/add-person-modal.component';
import { AddVoteStatModalComponent } from './add-vote-stat-modal/add-vote-stat-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemoveSpacesPipe } from './remove-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NameTileComponent,
    ModalTemplateComponent,
    AddPersonModalComponent,
    AddVoteStatModalComponent,
    RemoveSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
