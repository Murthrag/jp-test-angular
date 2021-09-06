import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { SongService } from '../../../services/song.service'

@Component({
	selector: 'app-tunes-insert-form',
	styleUrls: ['./tunes-insert-form.component.scss'],
	template: `
		<form (keyup.enter)="newSongsHaveArrived.emit(songInput.value)">
			<input #songInput type="text" />
		</form>
	`,
})
export class TunesInsertFormComponent implements OnInit {
	@Output() newSongsHaveArrived = new EventEmitter<string>()

	constructor(private SongService: SongService) {}

	ngOnInit(): void {}

	getMusic(name: string): void {
		this.SongService.addSong(name)
	}
}
