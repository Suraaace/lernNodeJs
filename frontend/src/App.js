
import React from 'react';

class Header extends React.Component {
  render() {
    return (
    <div>
      <div>I am Header</div>
    </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
    <div>
      <div>I am footer</div>
    </div>
    )
  }
}

class App extends React.Component {

  render() {
    return(
      <div>
        <Header/>
        <div>I am Body</div>
        <Footer/>
      </div>
    );
  }

}

export default App;