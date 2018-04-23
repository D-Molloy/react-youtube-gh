import React, { Component } from "react";

class SearchBar extends Component {
  //only method run automatically when the component is instantiated.  Use to setup variables/state
  constructor(props) {
    // Component has a constructor function, we invoke that by calling super
    super(props);
    //initializing the state via the constructor method being invoked
    //this is the only place we define properties with this.state.  Everywhere else is this.setState
    this.state = {
      term: ""
    };
  }

  //   controlled field is a form element (like input whose value is set by the state, not by an input.  Adding the value attribute makes it a controlled component
  //the inputs value only changes when the state changes
  //this.setstate rerenders the component, and the value is informing the input on what to display
  render() {
    return (
      <div className="search-bar">
        <b>Search YouTube:</b>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
