import React from 'react';
import './App.css';
import contacts from './contacts.json';

// const firstFive = contacts.slice(0, 5);
// console.log(firstFive);

class App extends React.Component {
  state = {
    counter: 5
  }

  handleClick = () => {
    this.setState({counter: this.state.counter + 1})
  }    

  render() {
    const contactsOfFirstFive = contacts.slice(0, this.state.counter);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleClick}>Click here for next actor</button>
        <table>
          <thead>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th> Popularity </th>
            </tr>
          </thead>
          <tbody>         
            {contactsOfFirstFive.map(data => {
              return (
                <tr key={data.id} >
                  <td> <img src={data.pictureUrl}  alt="actor"/> </td>
                  <td> {data.name} </td>
                  <td> {data.popularity} </td>
                 </tr>
              )
            })
          }
          </tbody>
         </table>
      </div>
    ) 
  }
}
export default App;

