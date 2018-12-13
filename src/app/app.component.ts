import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public filterField;

  public filterResults$: Observable<Country[]> = null;

  constructor() {}

  dataLength(data: Country[]) {
    return data.length > 0 ? true : false;
  }
}
