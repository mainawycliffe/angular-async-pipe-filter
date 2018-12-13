import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, FilterService } from './filter.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(value: string, searchText: string): Observable<Country[]> {
    return this.filterService.filterCountries(searchText);
  }
}
