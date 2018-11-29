import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { distinctUntilChanged, filter, throttle, debounceTime, withLatestFrom } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input()
  query: string;
  
  queryForm: FormGroup;

  constructor() { 
    const censor = (badword: string): ValidatorFn =>
      (control:AbstractControl): ValidationErrors | null => {
        const hasError = (control.value as string).includes(badword);
        return hasError ? {
        censor: {badword} // same as {badword: badword}
      } : null; // adds key to form error field
    };

    const asyncCensor = (badword: string): AsyncValidatorFn =>
      (control:AbstractControl): Observable<ValidationErrors | null> => {
      
        return Observable.create((observer: Observer<ValidationErrors|null>) => {
          const handler = setTimeout( () => {
            const hasError = (control.value as string).includes(badword);
            observer.next(
              hasError ? {
                censor: {badword}
              } : null
            );  
            observer.complete();
          }, 2000);
          //on unsubsribe
          return () => {
            clearTimeout(handler);
          }
        });
      };


    this.queryForm = new FormGroup({
      query: new FormControl('', [ 
        Validators.required,
        Validators.minLength(3),
        //censor('batman')
      ],[
        asyncCensor('batman')
      ]
      
      )
    });
    const value$ = this.queryForm.get('query')!.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(), // not the same value 
      filter(query => query.length >= 3),
    );

    const valid$ = this.queryForm.get("query")
      .statusChanges.pipe(filter(status => status === "VALID"));

    const search$ = valid$
      .pipe(
        withLatestFrom(value$, (valid, value) => value)
      );
    search$.subscribe(query => {
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
