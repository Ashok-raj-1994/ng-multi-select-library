import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-ng-multiselect',
  // template: `
  //   <p>
  //     ng-multiselect works!
  //   </p>
  // `,
  templateUrl: './ng-multi-select-library.component.html',
  styleUrls: ['./ng-multi-select-library.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgMultiSelectComponent),
      multi: true
    }
  ]
  // styles: [
  // ]
})
export class NgMultiSelectComponent implements ControlValueAccessor {

  @Input('filter') filter;
  @Input('filterBy') filterBy;


  @Input('options') data;
  @Input('optionLabel') optionLabel;
  @Input('optionValue') optionValue;
  @Output('onChange') onChangeInData = new EventEmitter();


  @Input() myinputMsg: string;
  selectData = [];
  selectedItems = [];
  constructor() { }

  private innerValue: any = '';

  onChange: any = () => { }
  onTouch: any = () => { }

  set value(v: any) {
    if (v !== this.innerValue) {
      // this.innerValue = v;
      // // this.onChange(v);
      // this.onChange(['a', 'b']);
    }
  }

  onBlur() {
    this.onTouch();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  input: string;
  writeValue(value: string) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  showOptions: boolean = false;


  selectValue = "";
  searchString = "";
  ngOnInit(): void {
    console.log(this.filter);
    this.selectData = this.data;


  }

  resetFilter() {
  }

  valueSelected(value) {
    value.selected = !value.selected;
  }

  clearInput() {
    this.focusIn();
  }

  focusOut() {
    console.log('focus out');
    this.showOptions = false;
  }

  focusIn() {
    console.log('focus in');
    this.showOptions = true;
  }

  filterRecords() {
    console.log(this.searchString)

    const searchString = this.searchString.toLowerCase();
    this.selectData = this.data.filter((data) => {
      const name = data[this.filterBy].toLowerCase();
      if (name.includes(searchString)) {
        return data;
      }
    })
  }

  checkBoxSelected() {
    // console.log("d ", this.selectData);
    // const selectedItems = this.selectData.filter((data) => {
    //   if (data.selected)
    //     return { test: 1 };
    // })
    let selectedItems = [];
    this.selectData.forEach((data) => {
      if (data.selected) {
        selectedItems.push({
          id: data[this.optionValue],
          text: data[this.optionLabel],
        })
      }
    })
    this.onChange(selectedItems);
    this.onChangeInData.emit(selectedItems);
    this.selectedItems = selectedItems.slice();
  }

  chooseOption(i) {
    this.selectData[i].selected = !this.selectData[i].selected;
    this.checkBoxSelected();
  }

}
