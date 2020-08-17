# Tailwindcss Multiline Truncate Support

[![MIT Licensed](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![PR friendly repository](https://img.shields.io/badge/Pull--Request-are%20welcome!-ff69b4)](/compare)
![Follow Fossbarrow on Twitter](https://img.shields.io/twitter/follow/fossbarrow?style=social)

Support for truncating multiple lines in Tailwindcss.

## Installation

**npm** 

```bash
npm install @fossbarrow/tailwindcss-multiline-truncate --save
```

**yarn**

```bash
yarn add @fossbarrow/tailwindcss-multiline-truncate 
```



## Usage

Register the plugin in `tailwind.config.js`.

```js
// tailwind.config.js
{
  plugins: [
    require('@fossbarrow/tailwindcss-multiline-truncate')(),
  ],
}
```

Add the truncate settings and modify after own desire in the same file.

```js
// tailwind.config.js
{
  theme: {
    truncate: {
        lines: {
            3: '3',
            5: '5',
            8: '8',
        }
    }
}
```

Now, in your vue component, you can use the plugin like so:

```html
<p class="truncate-3-lines">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro
    exercitationem dolorum nemo molestiae excepturi eos non suscipit, cupiditate
    incidunt libero nisi atque voluptas sint reiciendis placeat! Eos, magnam
    asperiores? ipsum dolor sit amet consectetur adipisicing elit.
    libero nisi atque voluptas sint reiciendis!
</p>
```

Output: 

```text
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro 
    exercitationem dolorum nemo molestiae excepturi eos non suscipit, cupiditate 
    incidunt libero nisi atque voluptas sint reiciendis placeat! Eos, magnam... 
```

## Utilities
This plugin generates the following utilities:

```css
.truncate-[key]-lines {
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': [value],
}
```

### Variants:
You can also add variants just like any rule:
```js
//tailwind.config.js
{
    ...
    plugins: [
       require('@fossbarrow/tailwindcss-multiline-truncate')(['responsive', 'hover']), 
    ]
}
```

--------------------------------------------------------------------------------

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [PatricNox](https://github.com/PatricNox)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

