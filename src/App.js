import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello, world!</h1>
//         <p>React Sample App</p>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
