import { Component, OnInit } from '@angular/core'
import { SongService } from '../../../services/song.service'
import { Song } from '../../../types'

@Component({
	selector: 'tunes-list',
	templateUrl: './tunes-list.component.html',
	styleUrls: ['./tunes-list.component.scss'],
})
export class TunesListComponent implements OnInit {
	// state
	songs: Song[] = []

	// init
	constructor(private songService: SongService) {}

	ngOnInit(): void {
		this.songService.newSongsHaveArrived.subscribe((data: Song[]) => {
			this.songs = data
		})
	}
}
