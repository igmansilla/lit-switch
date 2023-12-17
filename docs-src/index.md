---
layout: page.11ty.cjs
title: <lit-button> ⌲ Home
---

# &lt;lit-button>

`<lit-button>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-button>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-button></lit-button>
```

  </div>
  <div>

<lit-button></lit-button>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-button>` can be configured with attributed in plain HTML.

```html
<lit-button name="HTML"></lit-button>
```

  </div>
  <div>

<lit-button name="HTML"></lit-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-button>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;lit-button&gt;</h2>
    <lit-button .name=${name}></lit-button>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;lit-button&gt;</h2>
<lit-button name="lit-html"></lit-button>

  </div>
</section>
