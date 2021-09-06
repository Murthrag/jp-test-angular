import { Component, OnInit } from '@angular/core'
import { SongService } from '../../../services/song.service'
import { debounce } from 'lodash-es'

@Component({
	selector: 'tunes-search-form',
	styleUrls: ['./tunes-search-form.component.scss'],
	templateUrl: './tunes-search-form.component.html'
})
export class TunesSearchFormComponent implements OnInit {
	// init
	constructor(private songService: SongService) {}
	ngOnInit(): void {}

	// form submit
	getMusic(query: string): void {
		this.songService.getSongs(query)
		event?.preventDefault()
	}

	// while typing
	search = debounce((query: string): void => {
		this.getMusic(query)
	}, 500)
}
