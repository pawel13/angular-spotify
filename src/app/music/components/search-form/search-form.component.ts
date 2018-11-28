import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, throttle, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm: FormGroup;

  constructor() { 
    this.queryForm = new FormGroup({
      query: new FormControl('batman')
    });
    this.queryForm.get('query')!.valueChanges
    .pipe(
      debounceTime(400),
      filter(query => query.length >= 3),
      distinctUntilChanged(), // not the same value 
    )
    .subscribe(query => {
      this.search(query)
      // console.log(query);
    });
  }

  ngOnInit() {
  }

  @Output()
  queryChange = new EventEmitter<string>();

  search(value: string){
    this.queryChange.emit(value);
  }

}
