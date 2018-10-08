import React, { Component } from 'react';
import jsonFile from './data.json';
import Pictures from './components/Pictures';
import shuffle from './util/shuffle';

/**
 * This is the root component for our app.
 */
class App extends Component {
  /**
   * Initial state of our application is set to the Json file
   */
  state = {
    jsonState: jsonFile,
    message: 'Click to begin',
    score: 0
  }

  handleClick = (id) => {
    /**
     * Represents whether or not an image has already been clicked on
     */
    let hasAlreadyBeenClicked = false;

    /**
     * new state for json array
     */
    let newJsonState = this.state.jsonState.map(image => {
      /**
       * Copy of image object
       */
      const newImage = { ...image };
      
      // Checks to see if the current image in the array is the one we clicked on
      if (newImage.id === id) {
        
        // Checks to see if we've already clicked on this particular image in the past
        if (newImage.clicked === true) {
          hasAlreadyBeenClicked = true;
        }

        // If it is, set its "clicked" value to true
        newImage.clicked = true;
      }

      return newImage;
    });

    let newScore = this.state.score;
    let message;

    // If we've previously clicked on this image, then reset the game
    if (hasAlreadyBeenClicked === true) {
      // Set the score back to zero
      newScore = 0; 
      // Give the user a lovely message
      message = 'your memory sucks, start over (click to begin)';
      // Reset all the "clicked" values to `false`
      newJsonState = newJsonState.map(image => ({ ...image, clicked: false }));
    // Otherwise, we haven't already clicked on this message
    } else {
      // Increment the score by one
      newScore = newScore + 1;
      // Encourage the user
      message = 'good job, keep going';
    }

    this.setState({ jsonState: shuffle(newJsonState), score: newScore, message: message }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h3 className='score'>Score: {this.state.score}</h3>
        <Pictures pictures={this.state.jsonState} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
