import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/*
/* Page components
import { LoginComponent } from './components/login/login.component';
import { FullPageComponent } from './components/full-page/full-page.component';

/* Components under nav

/*Screens
import { ScreensComponent } from './components/map_start/map_start.component'; */

/*import { ScreensEditComponent } from './components/screens_edit/screens-edit.component';

/* Components */
import { MapStartComponent } from './components/map-start/map-start.component';
import { MapContentComponent } from './components/map-content/map-content.component';

/* Services */
import { PagesService } from './services/pages.service';

/* Shared components */
import { NavigationComponent } from './shared_components/navigation/navigation.component';

/* Shared assets */
/* Pipes */
import { SafePipe } from '../shared/sanitization.pipe'; // import our pipe here

/* Angular Material */
import { MatIconModule } from '@angular/material/icon';

/* Database */
//import { Database } from '../shared/database.json';

const appRoutes: Routes = [
  { path: 'mapstart', component: MapStartComponent },
  { path: 'mapcontent', component: MapContentComponent }, /*,
  { path: 'home', component: FullPageComponent, children: [
      {path: '', redirectTo: 'screens', pathMatch: 'full'},
      {path: 'screens', component: ScreensComponent},
      {path: 'edit', component: ScreensEditComponent}
    ] },
/*  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }, */
  { path: '',
    redirectTo: 'mapstart',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapStartComponent,
    MapContentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
	  FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [PagesService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule { }
