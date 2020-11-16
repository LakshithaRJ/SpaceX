import { RangeArrayCreatorPipe } from './range-array-creator.pipe';

describe('RangeArrayCreatorPipe', () => {
  it('create an instance', () => {
    const pipe = new RangeArrayCreatorPipe();
    expect(pipe).toBeTruthy();
  });
});
