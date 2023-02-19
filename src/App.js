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
        fetch('holdhttps://api.currencyfreaks.com/latest?apikey=85ad4dbd1ca245e0bf1c06440d1cfc6b&symbols=CAD,IDR,JPY,CHF,EUR,USD,GBP')
        .then((response) => response.json())
        .then((result) => {            
                this.setState ({post: result})                
                
                let {date, base, rates} = result             
                
                console.table (rates)               
                              
                document.getElementById('date').textContent = date;
                document.getElementById('base').textContent = base;
                document.getElementById('rates.CAD').textContent = rates.CAD;
                document.getElementById('rates.IDR').textContent = rates.IDR;
                document.getElementById('rates.JPY').textContent = rates.JPY;
                document.getElementById('rates.CHF').textContent = rates.CHF;
                document.getElementById('rates.EUR').textContent = rates.EUR;
                document.getElementById('rates.USD').textContent = rates.USD;
                document.getElementById('rates.GBP').textContent = rates.GBP;                
        })
    }
    render() {
      return (
        
        <div>
          
          <h1>Currecy Changes</h1>
          <p>Tanggal: <span id="date"></span></p>
          <p>Nilai Tukar: <span id="base"></span></p>
          <h2>Daftar Mata Uang</h2>

            <ul>
            <p>CAD: <span id="rates.CAD"></span></p>
            <p>IDR: <span id="rates.IDR"></span></p>
            <p>JPY: <span id="rates.JPY"></span></p>
            <p>CHF: <span id="rates.CHF"></span></p>
            <p>EUR: <span id="rates.EUR"></span></p>
            <p>USD: <span id="rates.USD"></span></p>
            <p>GBP: <span id="rates.GBP"></span></p>
            </ul>

        </div>
      )
    }
        
    
  }

export default App;
