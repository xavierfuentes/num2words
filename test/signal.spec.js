import chai from 'chai';
import NumbersToWords from '../lib/num2words.js';

const expect = chai.expect;

describe('Given an instance of the class NumbersToWords', () => {

  describe('When I need to turn numbers into words', () => {
    let lib = new NumbersToWords();

    it('should handle 0', () => {
      expect(lib.convert(0)).to.be.equal('zero');
    });

    it('should have a min of 0', () => {
      expect(lib.convert(-1)).to.be.equal('Not allowed');
    });

    it('should have a max of 1000', () => {
      expect(lib.convert(1001)).to.be.equal('Not allowed');
    });

    it('should handle numbers up until 19', () => {
      expect(lib.convert(10)).to.be.equal('ten');
    });

    it('should handle numbers up until 99', () => {
      expect(lib.convert(25)).to.be.equal('twenty-five');
    });

    it('should handle numbers up until 999', () => {
      expect(lib.convert(125)).to.be.equal('one hundred twenty-five');
    });

    it('should handle 1000', () => {
      expect(lib.convert(1000)).to.be.equal('one thousand');
    });
  });
});
