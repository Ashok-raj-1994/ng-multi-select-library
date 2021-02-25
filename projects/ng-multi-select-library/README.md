# NgMultiSelect

# [Demo](https://ngmultiselect.000webhostapp.com)

![demo](https://i.ibb.co/HgG3Tp1/screenshot.png)


## Features

- dropdown with single/multiple selction option
- bind to any data source
- search item with custom placeholder text

### Installation

```
npm i ng-multi-select-library
```

And then include it in your module :

```ts
import { NgMultiSelectModule } from 'ng-multi-select-library';
// ...

@NgModule({
  imports: [
    NgMultiSelectModule.forRoot()
    // ...
  ]
  // ...
})
export class AppModule {}
```

### Usage

```ts
import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {

  selected = [];

  data = [
    {
      name: "Steve Jobs",
      id: "1"
    },
    {
      name: "Bill Gates",
      id: "2"
    },
    {
      name: "Mark Zuckerberg",
      id: "3"
    },
    {
      name: "Jack Dorsey",
      id: "4"
    }

  ]


  onChangeInArray(data) {
    console.log("app component data ", data);
  }
}
```

```html
<lib-ng-multiselect
  [options]="data" optionLabel="name"
  optionValue="id"
  (onChange)="onChangeInArray($event)"
  [filter]="true"
  filterBy="name"
  [(ngModel)]="selected">
</lib-ng-multiselect>
```

```html
<lib-ng-multiselect
  [options]="data" optionLabel="name"
  optionValue="id"
  (onChange)="onChangeInArray($event)"
  [filter]="true"
  filterBy="name"
  formControlName="control">
</lib-ng-multiselect>
```


### Settings

| Name                        | Type       | Description                                                                                                                                                                                                                                                                                                                                              | Default Value       |
| :----------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| options                | Array    | An array of objects to display as the available options.                                                                                                                                                                                                                                                     | [ ]              |
| optionLabel                    | String     | Name of the label field of an option to display in dropdown.                                                                                                                                                                                                                                                   |            |
| optionValue                       | String    | Name of the value field to bind which would be considered as the selected value.                                            | false           |
| filter                       | boolean    | When this option is set to true, then the filter input would be visible in the dropdown. |            |
| filterBy                       | boolean    | When filtering is enabled, filterBy option will decide which field or fields to lookup while the user is searching.

### Callback Methods

- `onChange` - Return the selected items when an item is checked or unchecked.
  Example : (onChange)="onChangeInArray($event)"
