```js script
import { html, registerIconLibrary } from '~/md-layout';
```

# Icon Button



Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

For a full list of icons that come bundled with Shoelace, refer to the icon component.


```html:html
<sl-icon-button name="gear" label="Settings"></sl-icon-button>
```

#### Code

```htm
<sl-icon-button name="gear" label="Settings"></sl-icon-button>
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.


```html:html
<sl-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></sl-icon-button>
<sl-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></sl-icon-button>
<sl-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></sl-icon-button>
```

#### Code

```htm
<sl-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></sl-icon-button>
<sl-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></sl-icon-button>
<sl-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></sl-icon-button>
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.


```html:html
<div class="icon-button-color">
  <sl-icon-button name="type-bold" label="Bold"></sl-icon-button>
  <sl-icon-button name="type-italic" label="Italic"></sl-icon-button>
  <sl-icon-button name="type-underline" label="Underline"></sl-icon-button>
</div>

<style>
  .icon-button-color sl-icon-button::part(base) {
    color: #b00091;
  }
  
  .icon-button-color sl-icon-button::part(base):hover,
  .icon-button-color sl-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color sl-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

#### Code

```htm
<div class="icon-button-color">
  <sl-icon-button name="type-bold" label="Bold"></sl-icon-button>
  <sl-icon-button name="type-italic" label="Italic"></sl-icon-button>
  <sl-icon-button name="type-underline" label="Underline"></sl-icon-button>
</div>

<style>
  .icon-button-color sl-icon-button::part(base) {
    color: #b00091;
  }
  
  .icon-button-color sl-icon-button::part(base):hover,
  .icon-button-color sl-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color sl-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.


```html:html
<sl-tooltip content="Settings">
  <sl-icon-button name="gear" label="Settings"></sl-icon-button>
</sl-tooltip>
```

#### Code

```htm
<sl-tooltip content="Settings">
  <sl-icon-button name="gear" label="Settings"></sl-icon-button>
</sl-tooltip>
```

### Disabled

```html:html
<sl-icon-button name="gear" label="Settings" disabled></sl-icon-button>
```

#### Code

```htm
<sl-icon-button name="gear" label="Settings" disabled></sl-icon-button>
```


