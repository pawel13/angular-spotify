import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { distinctUntilChanged, filter, throttle, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm: FormGroup;

  constructor() { 
    const censor = (badword: string): ValidatorFn =>
      (control:AbstractControl): ValidationErrors | null => {
        const hasError = (control.value as string).includes(badword);
        return hasError ? {
        censor: { badword }
      } : null; // adds key to form error field
    };


    this.queryForm = new FormGroup({
      query: new FormControl('', [ 
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ])
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
