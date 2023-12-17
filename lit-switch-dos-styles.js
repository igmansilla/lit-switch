import { css } from "lit";

export const litSwitchDosStyles = css`
 
    .toggle {
      --width: 80px;
      --height: calc(var(--width) / 3);
 
      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      border-radius: var(--height);
      cursor: pointer;
    }
 
    .toggle input {
      display: none;
    }
 
    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: var(--color__grey--300);
      transition: all .15s ease-in-out;
    }
 
    .toggle .slider::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 5px;
      width: calc(var(--width) / 4);
      height: calc(var(--width) / 4);
      border-radius: calc(var(--height) / 2);
      background-color: var(--color__white);
      transition: all .15s ease-in-out;
    }
 
    .toggle input:checked+.slider {
      background-color: var(--color__blue--680);
    }
 
    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height) - 2px));
    }
 
    .toggle .labels {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 12px;
      font-family: securitas bold;
      transition: all .15s ease-in-out;
    }
 
    .toggle .labels::after {
      content: attr(data-off);
      position: absolute;
      top: 4px;
      right: 8px;
      color: var(--color__grey--600);
      opacity: 1;
      transition: all .15s ease-in-out;
    }
 
    .toggle .labels::before {
      content: attr(data-on);
      position: absolute;
      top: 4px;
      left: 8px;
      color: var(--color__white);
      opacity: 0;
      transition: all .15s ease-in-out;
    }
 
    .toggle input:checked~.labels::after {
      opacity: 0;
    }
 
    .toggle input:checked~.labels::before {
      opacity: 1;
    }
   `;