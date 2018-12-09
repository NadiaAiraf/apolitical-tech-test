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
  constructor(props) {
    super(props);
    this.state = {
      anagrams: []
    }
  }

  handleChange() {
    this.setState({
      anagrams: this.returnAnagrams()
    })
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
