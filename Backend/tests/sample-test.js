import { expect } from 'chai';
import { spy } from 'sinon';
import { sum, callMyFunction } from '../sample-test';

describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).to.eql(3);
  });
});

describe('callMyFunction function', () => {
  it('calls the passed function', () => {
    const callback = spy();
    callMyFunction(callback);
    expect(callback.called).to.eql(true);
  });
});
