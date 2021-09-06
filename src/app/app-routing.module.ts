import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './views/about/about.component'
import { HomeComponent } from './views/home/home.component'
import { TunesComponent } from './views/tunes/tunes.component'
import { DudeComponent } from './views/dude/dude.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'tunes',
		component: TunesComponent,
	},
	{
		path: 'dude',
		component: DudeComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
