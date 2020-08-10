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
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 5
    },
    {
      name: "NoName",
    }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi! I am {props.name}! {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;
