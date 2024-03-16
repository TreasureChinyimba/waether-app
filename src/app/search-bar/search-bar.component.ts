import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  city: string = ''; // Property to store the city input value

  @Output() searchCity = new EventEmitter<string>(); // Event emitter to send the city name to parent component

  search() {
    this.searchCity.emit(this.city); // Emit the city name when the search button is clicked
  }
}
