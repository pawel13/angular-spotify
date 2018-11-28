import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    console.log(this.queryForm);
  }

  ngOnInit() {
  }

  @Output()
  queryChange = new EventEmitter<string>();

  search(value: string){
    console.log(value);
    this.queryChange.emit(value);
  }

}
