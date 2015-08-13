import {assert} from 'chai';
import socialMediaLinks from '../index';

describe('socialMediaLinks', () => {

  describe('#create()', () => {

    let exampleOptions1 = {
        account: '',
        url: 'https://google.com',
        title: 'A nice search engine',
        img: 'https://www.google.com/images/srpr/logo11w.png',
        via: 'google',
        hashtags: [
          'search',
          'okgoogle',
          'awesome'
        ]
      },
      exampleOptions2 = {
        account: '',
        url: 'https://google.com'
      };

    it('should be defined correctly', () => {
      assert.isDefined(socialMediaLinks.create);
      assert.isFunction(socialMediaLinks.create);
    });

    it('should return an error if required arguments are not provided', () => {
      assert.throws(socialMediaLinks.create);
    });

    it('should return the correct email pattern', () => {
      exampleOptions1.account = 'email';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'mailto:?subject=A nice search engine&body=https://google.com'
      );
    });

    it('should return the correct twitter pattern', () => {
      exampleOptions1.account = 'twitter';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://twitter.com/share?url=https://google.com&text=A nice search engine&via=google&hashtags=search,okgoogle,awesome'
      );
    });

    it('should return the correct pinterest pattern', () => {
      exampleOptions1.account = 'pinterest';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://pinterest.com/pin/create/bookmarklet/?media=https://www.google.com/images/srpr/logo11w.png&url=https://google.com&description=A nice search engine %23search %23okgoogle %23awesome'
      );
    });

    it('should return the correct facebook pattern', () => {
      exampleOptions1.account = 'facebook';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://facebook.com/sharer.php?u=https://google.com'
      );
    });

    it('should return the correct google plus pattern', () => {
      exampleOptions1.account = 'googlePlus';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://plus.google.com/share?url=https://google.com'
      );
    });

    it('should return the correct linked in pattern', () => {
      exampleOptions1.account = 'linkedIn';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://linkedin.com/shareArticle?url=https://google.com&title=A nice search engine %23search %23okgoogle %23awesome'
      );
    });

    it('should return the correct buffer pattern', () => {
      exampleOptions1.account = 'buffer';
      assert.equal(
        socialMediaLinks.create(exampleOptions1),
        'https://bufferapp.com/add?url=https://google.com&text=A nice search engine %23search %23okgoogle %23awesome'
      );
    });

    it('should define default values correctly', () => {
      exampleOptions2.account = 'email';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'mailto:?subject=&body=https://google.com'
      );

      exampleOptions2.account = 'twitter';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://twitter.com/share?url=https://google.com&text=&via=&hashtags='
      );

      exampleOptions2.account = 'pinterest';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://pinterest.com/pin/create/bookmarklet/?media=&url=https://google.com&description= '
      );

      exampleOptions2.account = 'facebook';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://facebook.com/sharer.php?u=https://google.com'
      );

      exampleOptions2.account = 'googlePlus';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://plus.google.com/share?url=https://google.com'
      );

      exampleOptions2.account = 'linkedIn';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://linkedin.com/shareArticle?url=https://google.com&title= '
      );

      exampleOptions2.account = 'buffer';
      assert.equal(
        socialMediaLinks.create(exampleOptions2),
        'https://bufferapp.com/add?url=https://google.com&text= '
      );
    });
  });
});
