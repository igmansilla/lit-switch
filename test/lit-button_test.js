/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import { LitSwitch } from '../lit-switch.js';

suite('lit-switch', () => {
  test('is defined', () => {
    const el = document.createElement('lit-switch');
    assert.instanceOf(el, LitSwitch);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<lit-switch></lit-switch>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<lit-switch name="Test"></lit-switch>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<lit-switch></lit-switch>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = await fixture(html`<lit-switch></lit-switch>`);
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
