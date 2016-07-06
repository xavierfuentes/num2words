class NumbersToWords {
  constructor() {}

  convert(n) {
    if (n === 0) return 'zero';
    else if (n < 0) return 'Not allowed';
    else if (n === 1000) return 'one thousand';
    else if (n > 1000) return 'Not allowed';

    return this.toEnglish(n);
  }

  toEnglish(n) {
    const _1to19 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (n < 20) return _1to19[n - 1];

    return this.handle100s(n);
  }

  handle100s(n) {
    const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = [];

    if (n < 100) {
      result.push(tens[ Math.floor(n / 10) - 2 ]);
      result.push(this.toEnglish(n % 10));

      return result.join('-').trim();
    }

    result.push(this.toEnglish(Math.floor(n / 100)));
    result.push('hundred');
    result.push(this.toEnglish(n % 100));

    return result.join(' ').trim();
  }
}

export default NumbersToWords;
