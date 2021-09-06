import { Injectable, Output, EventEmitter } from '@angular/core'
import { Song, SongFromITunes } from '../types'
import { iTunesService } from './itunes.service'

@Injectable({
	providedIn: 'root'
})
export class SongService {
	@Output() newSongsHaveArrived: EventEmitter<any> = new EventEmitter()

	private songs: Song[] = []

	constructor(private iTunes: iTunesService) {}

	/**
	 * RETURN ALL SONGS
	 */
	public getSongs(query: string) {
		if (query) {
			this.iTunes.getData(query).subscribe(
				// next()
				(data: any) => {
					this.songs = data.results
						.filter((song: SongFromITunes) => song.kind === 'song')
						.map((song: SongFromITunes) => this.extractData(song))

					this.newSongsHaveArrived.emit(this.songs)
				},
				(error: any) => console.error(error), // error()
				() => console.info("we're done here") // complete()
			)
		}
	}

	/**
	 * extractData
	 */
	public extractData({
		trackId: id,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		trackName: title,
		collectionName: album
	}: SongFromITunes) {
		return { id, artist, audioFile, artwork, title, album } as Song
	}
}
