import React from 'react';
import { shallow } from '../src/enzyme'

import AnagramFinder from '../src/index.js';

describe('AnagramFinder', () => {

  describe('something', () => {
    it('does something', () => {
      const wrapper = shallow(<AnagramFinder />)
      expect(wrapper.find('form').length).toEqual(1)
    })
  })
})
