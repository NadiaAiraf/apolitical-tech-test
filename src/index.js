import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function returnWords () {
        var request = new XMLHttpRequest();
        request.open("GET", "./wordlist.txt", false);
        request.send();
        var returnText = request.responseText;

        return returnText;
}

var text = readString("./wordlist.txt").split("\n");

class AnagramFinder extends React.Component {

  render() {
    return(
      <form>
        <label>
          <textarea placeholder={'enter word here'} />
        </label>
        <ul>
          // Where my list of anagrams will be
        </ul>
      </form>
    )
  }
}

ReactDOM.render(
  <AnagramFinder />,
  document.getElementById('root')
)
