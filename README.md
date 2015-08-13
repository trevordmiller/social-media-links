# social-media-links

[![Build Status](https://travis-ci.org/trevordmiller/social-media-links.svg?branch=master)](https://travis-ci.org/trevordmiller/social-media-links)

Generate social media sharing links on the client or server

---

## Install

1. `$ npm install social-media-links --save`

---

## Example

```
import socialMediaLinks from 'social-media-links';

let socialData = {
    account: 'twitter',
    url: 'https://some-cool-url.com',
    title: 'This is a sweet title',
    hashtags: [
      'coolhashtag',
      'anothercoolhashtag'
    ]
};

let twitterLink = socialMediaLinks.create(socialData);
//=> {bar: 'foo'}
```

---

## API

### socialMediaLinks.create(options)

Generate a link for sharing on social media.

- Returns: `string`

#### options

##### account

Social media account type for the link.

- Type: `string`
- Default: `'email'`
- Options:
  - `email`
  - `twitter`
  - `pinterest`
  - `facebook`
  - `googlePlus`
  - `linkedIn`
  - `buffer`

##### url

Url for the link.

- Type: `string`
- Default: `''`

##### title (optional)

Title for the link.

- Type: `string`
- Default: `''`

##### img (optional)

Image thumbnail for the link.

- Type: `string`
- Default: `''`

##### via (optional)

Username of content author. Don't include the `@` as this will be added automatically.

- Type: `string`
- Default: `''`

##### hashtags (optional)

List of hashtags for the link. Don't include the `#` as this will be added automatically.

- Type: `array` of `string`s
- Default: `['']`

---

## Tests

`$ npm test`

---

## Contributing

PRs are welcome! Just follow these steps:

1. Clone
1. `npm install`
1. Follow code style in project
1. `npm run lint`
1. `npm test`

---

## License

MIT © [Trevor D. Miller](http://trevordmiller.com)
