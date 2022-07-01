import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './common/profile-info/profile-info.component';
import { ProfileHeaderComponent } from './common/profile-header/profile-header.component';
import { NavigationBarComponent } from './common/navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './common/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatModule } from './common/mat-Module.module';
import { WorkSkillsComponent } from './common/work-skills/work-skills.component';
import { SwitcherComponent } from './common/switcher/switcher.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './common/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    ProfileHeaderComponent,
    NavigationBarComponent,
    ProjectsComponent,
    WorkSkillsComponent,
    SwitcherComponent,
    SpinnerComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
