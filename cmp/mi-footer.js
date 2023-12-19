class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Rodriguez Urbina Edwin.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
