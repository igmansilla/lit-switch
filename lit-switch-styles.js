import { css } from 'lit';

export const LitSwitchStyles = css`

:host {
    --color__red--100: #ff8da3;
    --color__red--200: #fe718e;
    --color__red--300: #fd566c;
    --color__red--400: #fc273f;
    --color__red--500: #d31b3d;
    --color__red--600: #aa1834;
    --color__red--800: #641432; 
    --color__blue--100: #acc2dd;
    --color__blue--500: #42638c;
    --color__blue--600: #2e4869;
    --color__blue--650: #042b43;
    --color__blue--680: #04273c;
    --color__blue--700: #172f48;
    --color__blue--800: #031f30;
    --color__blue--900: #011523;
    --color__purple--100: #c2b4fc;
    --color__purple--400: #8d5fff;
    --color__purple--600: #55419e;
    --color__purple--800: #26224c;
    --color__white: #fff;
    --color__grey--input: #f3f3f3;
    --color__grey--100: #f7f7f7;
    --color__grey--200: #f8f8f8;
    --color__grey--300: #e5e5e5;
    --color__grey--400: #d7d8d6;
    --color__grey--500: #babcbc;
    --color__grey--600: #9c9ea0;
    --color__grey--800: #53565a;
    --color__success: #8dbf3d;
    --color__warning: #f6c348;
    --color__danger: #fc273f;
    font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }
  .form-check-input[type=checkbox]:checked {
        background-color: var(--color__blue--680) !important;
      border-color: var(--color__blue--680) !important;
  }
  .form-check-input[type=checkbox] {
    width: 3.5em !important;
    height: 1.7em !important;
    border: 0 !important;
    background-color: var(--color__grey--300) !important;
    background-image: url("./circle.svg") !important;
    margin: 0 !important;
  }
  .mx-2{margin-right:.5rem!important
    ;margin-left:.5rem!important}  
    
    label {
        color: var(--color__blue--680);
    }

    .form-check-input[type="checkbox"]:checked {
    background-color: var(--color__blue--680) !important;
    border-color: var(--color__blue--680) !important;
    }

.form-switch .form-check-input:checked {
    background-position: right center;
}

.form-check-input[type="checkbox"] {
    width: 3.5em !important;
    height: 1.7em !important;
    border: 0px !important;
    background-color: var(--color__grey--300) !important;
    background-image:  url("./circle.svg") !important;
    margin: 0px !important;
}

.form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: var(--bs-form-switch-bg);
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out 0s;
}

.form-check-input:checked {
    background-color: rgb(13, 110, 253);
    border-color: rgb(13, 110, 253);
}

.form-check-input {
    --bs-form-check-bg: var(--bs-body-bg);
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    appearance: none;
    background-color: var(--bs-form-check-bg);
    background-image: var(--bs-form-check-bg-image);
    background-position: center center;
    background-size: contain;
    border: var(--bs-border-width) solid var(--bs-border-color);
    -webkit-print-color-adjust: exact;
}

.form-check-input, .form-select {
    background-repeat: no-repeat;
}
       `