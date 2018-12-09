# Anagram Finder

Tech test, create a web page application that takes a word and finds all of it's anagrams from this [list](http://codekata.com/data/wordlist.txt).

This tech test was completed using React and 'tested' using Jest Enzyme. I've had a very small amount of previous experience with Jest and React but came into this test having never used Enzyme and it really shows. Everything in this repo was completed in just over 1 hour (asides from this readme).

## How to run this application

1. clone this repo/saves this files locally if you have a zip folder
2. navigate to this folder on your command line
3. enter the command `npm install`
4. enter command `npm start`
5. go to your localhost:3000 with your browser of choice

## Testing

In an ideal world, to run these tests it's been setup to run on the command `npm test` which also shows you code coverage. Testing React has been completely new to me and because of this despite attempting a couple of different methods of setting up Enzyme with Jest it continues to have issues with the jsx that React uses.

In an effort to actually have something to submit I continued without testing after spending approx 35% of my time trying to get these tests to work. I did write the tests so hopefully they give a small indication of how I might have tested things.

## Where I got to

I was just finishing off writing the code to return an array of all of the algorithms. The next step would have been to set up the code so that it returned an unordered list of those algorithms on the page below the input box.
