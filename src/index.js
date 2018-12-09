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

var text = returnWords("./wordlist.txt").split("\n");

class AnagramFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anagrams: []
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      anagrams: this.returnAnagrams(this.state.value)
    })
  }

  returnAnagrams(keyword) {
    var anagrams = []
    for (var i = 0; i < text.length; i++) {
      if (this.sortWord(text[i] === this.sortWord(keyword))) {
        anagrams.push(text[i])
      }
    }
    return anagrams
  }

  sortWord(word) {
    return word.split('').sort().join('')
  }


  render() {
    return(
      <form>
        <label>
          <textarea placeholder={'enter word here'} onChange={this.handleChange} />
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
