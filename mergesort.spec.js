describe('merge', () => {
  it('can merge two one element arrays', () => {
    expect(merge([2], [1])).toEqual([1, 2])
  });
  it('can handle an empty array', () => {
    expect(merge([1, 2], [])).toEqual([1, 2]);
  });
  it('can handle arrays of many elements', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('mergesort', () => {
  it('sorts an array', () => {
    expect(mergesort([5, 3, 6, 9, 23, 212])).toEqual([3, 5, 6, 9, 23, 212]);
  })
})
