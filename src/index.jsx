import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  // set la value
  localStorage.setItem('theName', 'the data');

  // changer la value
  localStorage['theName'] = 'ZEGEZGEZGZEG'

  // get item
  const aBeautifulNameForAVariable = localStorage.getItem('theName');
  console.log(aBeautifulNameForAVariable)

  //remove item 
  //localStorage.removeItem('theName')

  //clear (remove all entries from localStorage)
  //localStorage.clear()

  // lenght


  // index ou key
  localStorage.key(0) // returns "theName"

  // print all keys
  //localStorage.forEach((item, index) => {
  //  console.log(index, item); 
  //});

  // stocker un objet grace a JSON.stringify()

  const newItem = {
    name: 'pedro',
    age: 20,
    city: 'NY',
  }

  localStorage.setItem('person', JSON.stringify(newItem))

  const res = JSON.parse(localStorage.getItem('person'))
  console.log(res)
  
  return (
    <div className="app">
      <h2>train local storage</h2>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));