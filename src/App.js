import React, { useEffect, useState } from 'react';
import './App.css';
import DataTable from 'react-data-table-component';

class App extends React.Component {
    constructor (dataCurrencyfreaks){
        super (dataCurrencyfreaks)
        this.state = {
            post: [],
        }
      }
    componentDidMount (){
        fetch('https://api.currencyfreaks.com/latest?apikey=cfcb55b0a9b04fa7bc9fa7ebf8906b01&symbols=CAD,IDR,JPY,CHF,EUR,USD,GBP')
        .then((response) => response.json())
        .then((result) => {            
                this.setState ({post: result})                
                
                let {date, base, rates} = result  
                // console.table (rates)

                let {CAD, IDR, JPY, CHF, EUR, GBP} = rates
                // console.log (CAD)
                
                let persen1 = parseFloat(CAD) / 5;
                let persen2 = parseFloat(IDR) / 5;
                let persen3 = parseFloat(JPY) / 5;
                let persen4 = parseFloat(CHF) / 5;
                let persen5 = parseFloat(EUR) / 5;
                let persen6 = parseFloat(GBP) / 5;
                // console.log(persen1)
                
                let weBuyCAD = (parseFloat(CAD) + persen1)
                let weBuyIDR = (parseFloat(IDR) + persen2)
                let weBuyJPY = (parseFloat(JPY) + persen3)
                let weBuyCHF = (parseFloat(CHF) + persen4)
                let weBuyEUR = (parseFloat(CAD) + persen5)
                let weBuyGBP = (parseFloat(CAD) + persen6)
                // console.log (weBuyIDR)

                let weSellCAD = (parseFloat(CAD) - persen1)
                let weSellIDR = (parseFloat(IDR) - persen2)
                let weSellJPY = (parseFloat(JPY) - persen3)
                let weSellCHF = (parseFloat(CHF) - persen4)
                let weSellEUR = (parseFloat(CAD) - persen5)
                let weSellGBP = (parseFloat(CAD) - persen6)
                // console.log (weSellIDR)
                              
                document.getElementById('date').textContent = date;
                document.getElementById('base').textContent = base;
                document.getElementById('CAD').textContent = CAD;
                document.getElementById('IDR').textContent = IDR;
                document.getElementById('JPY').textContent = JPY;
                document.getElementById('CHF').textContent = CHF;
                document.getElementById('EUR').textContent = EUR;
                document.getElementById('GBP').textContent = GBP;

                document.getElementById('weBuyCAD').textContent = weBuyCAD;
                document.getElementById('weBuyIDR').textContent = weBuyIDR;
                document.getElementById('weBuyJPY').textContent = weBuyJPY;
                document.getElementById('weBuyCHF').textContent = weBuyCHF;
                document.getElementById('weBuyEUR').textContent = weBuyEUR;
                document.getElementById('weBuyGBP').textContent = weBuyGBP;

                document.getElementById('weSellCAD').textContent = weSellCAD;
                document.getElementById('weSellIDR').textContent = weSellIDR;
                document.getElementById('weSellJPY').textContent = weSellJPY;
                document.getElementById('weSellCHF').textContent = weSellCHF;
                document.getElementById('weSellEUR').textContent = weSellEUR;
                document.getElementById('weSellGBP').textContent = weSellGBP;
                // document.getElementById('rates.USD').textContent = rates.USD;

        })
      
    }
    render() {
      return (
        
        <div>
          
          <h1>Display Rate Currency</h1>
          <p>Tanggal: <span id="date"></span></p>
          <p>Nilai Tukar: <span id="base"></span></p>
          <h2>Harga Penukaran Hari Ini</h2>
            <ul>
            <p>CAD: <span id="CAD"></span></p>
            <p>EUR: <span id="EUR"></span></p>
            <p>IDR: <span id="IDR"></span></p>
            <p>JPY: <span id="JPY"></span></p>
            <p>CHF: <span id="CHF"></span></p>
            <p>GBP: <span id="GBP"></span></p>
            </ul>
            <h2>Kami Membeli</h2>
            <ul>
            <p>CAD: <span id="weBuyCAD"></span></p>
            <p>EUR: <span id="weBuyEUR"></span></p>
            <p>IDR: <span id="weBuyIDR"></span></p>
            <p>JPY: <span id="weBuyJPY"></span></p>
            <p>CHF: <span id="weBuyCHF"></span></p>
            <p>GBP: <span id="weBuyGBP"></span></p>
            </ul>
            <h2>Kami Menjual</h2>
            <ul>
            <p>CAD: <span id="weSellCAD"></span></p>
            <p>EUR: <span id="weSellEUR"></span></p>
            <p>IDR: <span id="weSellIDR"></span></p>
            <p>JPY: <span id="weSellJPY"></span></p>
            <p>CHF: <span id="weSellCHF"></span></p>
            <p>GBP: <span id="weSellGBP"></span></p>
            </ul>
        </div>
      )
    }
  }
export default App;
