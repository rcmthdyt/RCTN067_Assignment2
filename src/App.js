import React from 'react';
import './App.css';

class App extends React.Component {
    constructor (dataCurrencyfreaks){
        super (dataCurrencyfreaks)
        this.state = {
            post: [],
        }
      }
    componentDidMount (){
        fetch('https://api.currencyfreaks.com/latest?apikey=85ad4dbd1ca245e0bf1c06440d1cfc6b&symbols=CAD,IDR,JPY,CHF,EUR,USD,GBP')
        .then((response) => response.json())
        .then((result) => {            
                this.setState ({
                post: result})
                                              
                                
                let {date, base, rates} = result               
                const currency = Object.keys(rates)
                .map(currency => ({
                  rates
                }))

                console.table(Object.keys(rates))
                
                const CAD = rates[0] 
                const IDR = rates[1]
                const JPY = rates[2]
                const CHF = rates[3]
                const EUR = rates[4]
                const USD = rates[5]
                const GBP = rates[6]
                
                              
                document.getElementById('date').textContent = date;
                document.getElementById('base').textContent = base;
                document.getElementById('rates').textContent = rates;
                   
        })
    }
        
    render() {
      // const listItems = rates.map((d) => <li key={d.name}>{d.name}</li>);
      return (
        <div>
          
          <h1>Currecy Changes</h1>
          
          <p>date: <span id="date"></span></p>
          <p>base: <span id="base"></span></p>
          <p>rates: <span id="rates"></span></p>
          
          
        </div>
      )
    }
  }

export default App;
