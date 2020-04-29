# vuetify-datetime-input

Finally a simple Vuetify Date/Time Input using nativ browser features.

## Installation

```shell
npm install --save @darenegade/vuetify-datetime-input

or

yarn add  @darenegade/vuetify-datetime-input
```

Import in `main.js`.
```js
import Vue from 'vue'
import "@darenegade/vuetify-datetime-input"

...
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-datetime-input 
    label="Input your Datetime here" 
    v-model="datetime"></v-datetime-input>
```

## Properties

| Name                  | Type          | Default Value                     | Description                           |
| ----------------      | -----------   | -------------                     | ----------------------------------    |
| datetime (model)      | Date/String   |                                   | Time input model.                     |
| readonly              | Boolean       | false                             | Input is readonly.                    |
| hideDetails           | Boolean       | false                             | Hides details under input.            |
| dense                 | Boolean       | false                             | Input is dense.                       |
| filled                | Boolean       | false                             | Input is filled.                      |
| outlined              | Boolean       | false                             | Input is outlined.                    |
| clearable             | Boolean       | true                              | Input is clearable.                   |
| persistentHint        | Boolean       | false                             | Activates persistent hint.            |
| hint                  | String        | false                             | Text of persistent hint.              |
| label                 | String        | ""                                | Label of Input.                       |
| date-label            | String        | "Date"                            | Label of Date-Input.                  |
| time-label            | String        | "Time"                            | Label of Time-Input.                  |
| incompleteErrorMessage| String        | "Date and Time needs to be filled"| Error message if one field is missing.|
| rules                 | Array         | []                                | Validation rules.                     |

## Events

| Name  | Arguments           | Description             |
| ----- | ------------------- | ----------------------- |
| input | value (String) | The updated model       |