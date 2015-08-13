let socialMediaLinks = {
  create(options) {
    let account = options.account || 'email',
      url = options.url || '',
      title = options.title || '',
      img = options.img || '',
      via = options.via || '',
      hashtags = options.hashtags || [''],
      commaHashtags = !hashtags[0] ? '' : hashtags.join(','),
      encodedHashtags = !hashtags[0] ? '' : hashtags.map(hashtag => `%23${hashtag}`).join(' ');

    if(!options) {
      throw 'Required arguments were not provided';
    }

    if(account === 'email') {
      return `mailto:?subject=${title}&body=${url}`;
    }

    if(account === 'twitter') {
      return `https://twitter.com/share?url=${url}&text=${title}&via=${via}&hashtags=${commaHashtags}`;
    }

    if(account === 'pinterest') {
      return `https://pinterest.com/pin/create/bookmarklet/?media=${img}&url=${url}&description=${title} ${encodedHashtags}`;
    }

    if(account === 'facebook') {
      return `https://facebook.com/sharer.php?u=${url}`;
    }

    if(account === 'googlePlus') {
      return `https://plus.google.com/share?url=${url}`;
    }

    if(account === 'linkedIn') {
      return `https://linkedin.com/shareArticle?url=${url}&title=${title} ${encodedHashtags}`;
    }

    if(account === 'buffer') {
      return `https://bufferapp.com/add?url=${url}&text=${title} ${encodedHashtags}`;
    }
  }
};

export default socialMediaLinks;
