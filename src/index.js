import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
