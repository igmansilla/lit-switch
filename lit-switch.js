import { LitElement, css, html } from "lit";

export class LitSwitch extends LitElement {
  static get styles() {
    return [css`
      .form-check-input[type=checkbox]:checked {
        background-color: var(--color__blue--680) !important;
     	border-color: var(--color__blue--680) !important;
	}
  .form-check-input[type=checkbox] {
		width: 3.5em !important;
		height: 1.7em !important;
		border: 0 !important;
		background-color: var(--color__grey--300) !important;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='white'/%3e%3c/svg%3e") !important;
		margin: 0 !important;
	}
  .mx-2{margin-right:.5rem!important
    ;margin-left:.5rem!important}    
    `];
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
    this.targetComponent = null;
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
      <div>
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
