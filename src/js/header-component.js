import React from "react";
import {Component} from 'react';

class HeaderComponent extends Component {

  state = {
    darkMode: true
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({darkMode: !this.state.darkMode});
  };

  componentWillMount() {
    // could do something like pull state from API
  }

  componentDidMount() {
    console.log('HeaderComponent did mount');
  }

  render() {
    const {title} = this.props;
    let modeClass = this.state.darkMode ? "dark-mode" : "light-mode";
    let checked = this.state.darkMode ? "checked" : "unchecked";

    return (
      <div className={`box content ${modeClass}`}>
        <h1>{title}</h1>
        <p>I was built with a Class component extending React.Component.</p>
        <label className="checkbox">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={this.handleChange}/>
          {' '}Dark Mode
        </label>
      </div>
    );
  }
}

export default HeaderComponent;
