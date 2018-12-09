import React from 'react';
import { shallow } from '../src/enzyme'

import AnagramFinder from '../src/index.js';
import returnWords from '../src/index.js'

describe('returnWords', () => {
  it('returns a an array of words from the txt file', () => {
    const array = returnWords();
    expect(array[0]).toEqual('A')
  })
})

// describe('AnagramFinder', () => {
//   it('should render a form html element', () => {
//     const wrapper = shallow(<AnagramFinder />)
//     expect(wrapper.find('form').length).toEqual(1)
//   })
// })
