import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  city: string = ''; // Property to store the entered city name
  @Output() searchCity = new EventEmitter<string>(); // Event emitter for search query

  constructor() { }

  search() {
    alert(this.searchCity.emit(this.city))
  }
}
