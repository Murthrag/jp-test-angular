import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import { trigger, style, animate, transition } from '@angular/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Dude } from '../../types'

@Component({
	selector: 'app-dude',
	templateUrl: './dude.component.html',
	styleUrls: ['./dude.component.scss'],
	animations: [
		trigger('dudeAnim', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'scale(0.75)',
				}),
				animate('0.2s ease'),
			]),
			transition(':leave', [
				animate(
					'0.2s ease',
					style({
						opacity: 0,
						transform: 'scale(0.75)',
					})
				),
			]),
		]),
	],
})
export class DudeComponent implements OnInit {
	@ViewChild('inputWho', { static: false }) inputWho!: ElementRef
	@ViewChild('inputWhat', { static: false }) inputWhat!: ElementRef

	/**
	 * DATA (STATE)
	 */
	newWho: string = ''
	newWat: string = ''
	characters: Dude[] = []

	/**
	 * COMPONENT IS READY TO KILL
	 */
	ngOnInit() {
		fetch(
			'https://app.fakejson.com/q/PhKvlVIH?token=POdTDcdBoNn-UgkiHRa5JA'
		)
			.then((res) => res.json())
			.then((json) => (this.characters = json.resources))
	}

	/**
	 * IS MY MAN SHORT?
	 */
	isShort(dude: string): boolean {
		return dude.split(' ').length < 3
	}

	/**
	 * KILL DUDE
	 */
	remove(dude: Dude) {
		this.characters = this.characters.filter((item) => item !== dude)
	}

	/**
	 * ADD DUDE TO CHARACTERS
	 */
	addDude() {
		if (!this.newWho || !this.newWat) return

		this.characters.push({
			id: Math.max(...this.characters.map((d) => d.id)) + 1,
			who: this.newWho,
			wat: this.newWat,
			cool: 15,
		})

		// reset
		this.resetForm()
	}

	/**
	 * RESET FORM
	 */
	resetForm() {
		this.newWho = ''
		this.newWat = ''

		this.inputWho.nativeElement.focus()
	}
}
