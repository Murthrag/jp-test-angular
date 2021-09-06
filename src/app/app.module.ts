import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// views
import { HomeComponent } from './views/home/home.component'
import { AboutComponent } from './views/about/about.component'
import { TunesComponent } from './views/tunes/tunes.component'
import { DudeComponent } from './views/dude/dude.component'

// components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component'
import { TunesSearchFormComponent } from './components/tunes/tunes-search-form/tunes-search-form.component'
import { TunesListComponent } from './components/tunes/tunes-list/tunes-list.component'
import { TunesSongComponent } from './components/tunes/tunes-song/tunes-song.component'
import { SongifyPipe } from './pipes/songify.pipe'
import { ShortenPipe } from './pipes/shorten.pipe'

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		DudeComponent,
		TunesComponent,
		TheNavigationComponent,
		TunesSearchFormComponent,
		TunesListComponent,
		TunesSongComponent,
		SongifyPipe,
		ShortenPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
