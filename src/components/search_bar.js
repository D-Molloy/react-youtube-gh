import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <h5 id="search_title">
          Ambient music is the perfect way to focus on the task at hand.<br />{" "}
          Enter a topic below, and we'll find you the best ambient music based
          on that topic!
        </h5>
        <span id="search_input_title">Topic: </span>
        <input
          id="search_input"
          placeholder="e.g. Spa, Acoustic, Sleep, Studying"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
