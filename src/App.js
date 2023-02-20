import React from 'react';
import './App.css';

class App extends React.Component {
    constructor (dataCurrencyfreaks){
        super (dataCurrencyfreaks)
        this.state = {
            post: [],
            weBuy:[],
            weSell: [],
        }
      }
    componentDidMount (){
        fetch('https://api.currencyfreaks.com/latest?apikey=cfcb55b0a9b04fa7bc9fa7ebf8906b01&symbols=CAD,IDR,JPY,CHF,EUR,USD,GBP')
        .then((response) => response.json())
        .then((result) => {            
                this.setState ({post: result.rates})
                console.log(result.rates)                
                
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
                let weBuyEUR = (parseFloat(EUR) + persen5)
                let weBuyGBP = (parseFloat(GBP) + persen6)
                // console.log (weBuyIDR)

                let weSellCAD = (parseFloat(CAD) - persen1)
                let weSellIDR = (parseFloat(IDR) - persen2)
                let weSellJPY = (parseFloat(JPY) - persen3)
                let weSellCHF = (parseFloat(CHF) - persen4)
                let weSellEUR = (parseFloat(EUR) - persen5)
                let weSellGBP = (parseFloat(GBP) - persen6)
                // console.log (weSellIDR)

                this.setState({weBuy:{
                  CAD: weBuyCAD,
                  IDR: weBuyIDR,
                  JPY: weBuyJPY,
                  CHF: weBuyCHF,
                  EUR: weBuyEUR,
                  GBP: weBuyGBP,
                }})

                this.setState({weSell:{
                  CAD: weSellCAD,
                  IDR: weSellIDR,
                  JPY: weSellJPY,
                  CHF: weSellCHF,
                  EUR: weSellEUR,
                  GBP: weSellGBP,
                }})
                // document.getElementById('rates.USD').textContent = rates.USD;
        })
    }
    render() {
      return (
        <div class="center">
          <table>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
            <tr>
              <td>
                <p>CAD:</p>
                <p>EUR:</p>
                <p>IDR:</p>
                <p>JPY:</p>
                <p>CHF:</p>
                <p>GBP:</p>
              </td>
              <td>
                <p><span id="weBuyCAD">{this.state.weBuy.CAD}</span></p>
                <p><span id="weBuyEUR">{this.state.weBuy.EUR}</span></p>
                <p><span id="weBuyIDR">{this.state.weBuy.IDR}</span></p>
                <p><span id="weBuyJPY">{this.state.weBuy.CAD}</span></p>
                <p><span id="weBuyCHF">{this.state.weBuy.CAD}</span></p>
                <p><span id="weBuyGBP">{this.state.weBuy.CAD}</span></p>
              </td>
              <td>
                <p><span id="CAD">{this.state.post.CAD}</span></p>
                <p><span id="EUR">{this.state.post.EUR}</span></p>
                <p><span id="IDR">{this.state.post.IDR}</span></p>
                <p><span id="JPY">{this.state.post.JPY}</span></p>
                <p> <span id="CHF">{this.state.post.CHF}</span></p>
                <p> <span id="GBP">{this.state.post.GBP}</span></p>
              </td>
              <td>
                <p><span id="weSellCAD">{this.state.weSell.CAD}</span></p>
                <p><span id="weSellEUR">{this.state.weSell.EUR}</span></p>
                <p><span id="weSellIDR">{this.state.weSell.IDR}</span></p>
                <p><span id="weSellJPY">{this.state.weSell.JPY}</span></p>
                <p><span id="weSellCHF">{this.state.weSell.CHF}</span></p>
                <p><span id="weSellGBP">{this.state.weSell.GBP}</span></p>
              </td>
              </tr>          
          </table>
          <p>
            <h3>Rates are based from 1 USD.</h3>
            This application uses API from https://currencyfreaks.com.
          </p>
        </div>
      )
    }
  }
export default App;

