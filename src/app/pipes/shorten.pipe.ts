import { Pipe, PipeTransform } from '@angular/core'
import { truncate } from 'lodash-es'

@Pipe({
	name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
	transform(value: string, length: number = 100): string {
		return truncate(value, { length: length })
	}
}
