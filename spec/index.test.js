import React from 'react';
import { shallow } from '../src/enzyme'

import AnagramFinder from '../src/index.js';

describe('AnagramFinder', () => {
  it('should render a form html element', () => {
    const wrapper = shallow(<AnagramFinder />)
    expect(wrapper.find('form').length).toEqual(1)
  })
})
