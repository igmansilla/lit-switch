import { LitElement, html } from "lit";
import { litSwitchDosStyles } from "./lit-switch-dos-styles.js";

export class LitSwitchDos extends LitElement {
  static properties = {
    text: { type: String },
    checked: { type: Boolean, reflect: true },
  };

  static styles = litSwitchDosStyles;

  constructor() {
    super();
    this.text = "";
    this.checked = false;
  }

  _handleClick() {
    this.checked = !this.checked;
  }

  _handleChange(event) {
    this.checked = event.target.checked;
    const newEvent = new CustomEvent("switchChange", {
      detail: { checked: event.target.checked },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newEvent);
  }

  render() {
    return html`
      <div class="toggle" @click=${this._handleClick}>
        <input
          type="checkbox"
          ?checked=${this.checked}
          @change=${this._handleChange}
        />
        <span class="slider"></span>
        <span class="labels" data-on=${this.text} data-off=${this.text}></span>
      </div>
    `;
  }
}
