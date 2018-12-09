import React from 'react';
import { shallow } from 'enzyme'

import AnagramFinder from '../src/index.js';
import returnWords from '../src/index.js'

describe('returnWords', () => {
  it('returns a an array of words from the txt file', () => {
    const array = returnWords();
    expect(array[0]).toEqual('A')
  })
})

describe('AnagramFinder', () => {
  it('should render a form html element', () => {
    const wrapper = shallow(<AnagramFinder />)
    expect(wrapper.find('form').length).toEqual(1)
  })

  describe(handleChange, () => {
    it('finds the new anagrams available when the handle changes', () =>{
      anagramFinder = new AnagramFinder()
      anagramFinder.setState = jest.fn()
      anagramFinder.returnAnagrams = jest.fn()
      anagramFinder.handleChange()
      expect(anagramFinder.setState).toHaveBeenCalledTimes(1)
      expect(anagramFinder.returnAnagrams).toHaveBeenCalledTimes(1)
    })
  })

  describe('sortWord', () => {
    it('returns a single string sorted alphabetically', () => {
      anagramFinder = new AnagramFinder()
      answer = anagramFinder.sortWord('hello')
      expect(answer).toEqual('ehllo')
    })
  })

  describe('returnAnagrams', () => {
    it('returns an array of all possible anagrams of a given word', () => {
      anagramFinder = new AnagramFinder()
      
    })
  })
})
