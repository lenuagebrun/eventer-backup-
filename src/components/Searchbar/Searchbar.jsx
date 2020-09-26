import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  }
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term);
  }
  // Currently the class names are tied to CDN styling from Semantic UI. If you don't want it remove the class name properties.
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
            type="text" 
            value={this.state.term}
            // This is the function call that needs to be tied to the database.
            onChange={(e) => this.setState({term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  };
}
export default SearchBar