import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/* Components */
import { MapStartComponent } from './components/map-start/map-start.component';
import { MapContentComponent } from './components/map-content/map-content.component';

/* Services */
import { PagesService } from './services/pages.service';

/* Angular Material */
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  { path: 'mapstart', component: MapStartComponent },
  { path: 'mapcontent', component: MapContentComponent }, 
  { path: '',
    redirectTo: 'mapstart',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
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
