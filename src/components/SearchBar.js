import React from "react";

class SearchBar extends React.Component {
  state = {userInput: ""};
  //REASON WHY THIS IS EVENT IS BEACUSE ITS A CALLBACK FUNCTION
  inputChange = (event) => {
    this.setState({userInput: event.target.value});
  };
  // THIS FUNCTION PREVENTS THE PAGE FROM AUTO SUBMITING
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onUserSubmit(this.state.userInput);
  };

  render() {
    return (
        <div className='search-bar ui segment'>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label>Video Search</label>
              <input
                  onChange={this.inputChange}
                  type='text'
                  value={this.state.userInput}
              />
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;

/** NOTE
 * onChange & onSubmit() must be typed as is!
 *
 */
