import { LitElement, html } from "lit";
import { LitSwitchStyles } from "./lit-switch-styles";

export class LitSwitch extends LitElement {
  static get styles() {
    return [LitSwitchStyles];
  }

  static get properties() {
    return {
      label: { type: String },
      id: { type: String },
      name: { type: String },
      checked: { type: Boolean, reflect: true },
      readonly: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.checked = false;
  }

  updated(changedProperties) {
    if (changedProperties.has("checked")) {
      this.requestUpdate();
    }
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
      <div class="form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id=${this.id + "-input"}
          name=${this.name}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this._handleChange}
        />
        <label class="form-check-label mx-2" for=${this.id + "-input"}
          >${this.label}</label
        >
      </div>
    `;
  }
}

customElements.define("lit-switch", LitSwitch);
