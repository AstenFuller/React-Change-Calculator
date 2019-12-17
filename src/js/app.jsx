import React, { Component } from 'react';

function calculate(amountDue, amountReceived) {
    let change = amountReceived - amountDue
    let changeRemaining = change % 1;
    let wholeChange = change - changeRemaining;
    changeRemaining = changeRemaining * 100;
    let twenties = Math.floor(wholeChange / 20);
    wholeChange = Math.round(wholeChange % 20);
    let tens = Math.floor(wholeChange / 10);
    wholeChange = Math.round(wholeChange % 10);
    let fives = Math.floor(wholeChange / 5);
    wholeChange = Math.round(wholeChange % 5);
    let dollars = Math.floor(wholeChange);
    let quarters = Math.floor(changeRemaining / 25);
    changeRemaining = Math.round(changeRemaining % 25);
    let dimes = Math.floor(changeRemaining / 10);
    changeRemaining = Math.round(changeRemaining % 10);
    let nickels = Math.floor(changeRemaining / 5);
    changeRemaining = Math.round(changeRemaining % 5);
    let pennies = Math.floor(changeRemaining);
      change =[
        twenties,
        tens,
        fives,
        dollars,
        quarters,
        dimes,
        nickels,
        pennies
    ];
    return change;
} 

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      amountDue: "",
      amountReceived: "",
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  if(parseFloat(this.state.amountDue) <= parseFloat(this.state.amountReceived)){
      const change = calculate(this.state.amountDue, this.state.amountReceived);

      this.setState({
      twenties: change[0],
      tens: change[1],
      fives: change[2],
      ones: change[3],
      quarters: change[4],
      dimes: change[5],
      nickels: change[6],
      pennies: change[7],
    });
  }else{
    this.setState({
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    });
  }
    handleAlert(this.state.amountDue, this.state.amountReceived);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  render() {
    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>
              <div className="panel-content" id="first-panel">How much is due?
                <input className="moneyInput" name="amountDue" type="number" value={this.state.amountDue} onChange={this.handleChange} />
              </div>
              <div className="panel-content"> How much was Received?
                <input className="moneyInput" name="amountReceived" type="number" value={this.state.amountReceived} onChange={this.handleChange} />
              </div>
              <div className="panel-footer"><button className="btn" onClick={this.handleClick}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
            <div className="panel panel-heading" id="alertPanel">Final Change</div>
              <div className="row grid top">
                <div className="gridRow">
                  <p>Twenties</p>
                  <p className="change">{this.state.twenties}</p>
                </div>
                <div className="gridRow">
                  <p>Tens</p>
                  <p className="change">{this.state.tens}</p>
                </div>
                <div className="gridRow">
                  <p>Fives</p>
                  <p className="change">{this.state.fives}</p>
                </div>
                <div className="gridRow">
                  <p>Ones</p>
                  <p className="change">{this.state.ones}</p>
                </div>
              </div>
              <div className="row grid bottom">
                <div className="gridRow">
                  <p>Quarters</p>
                  <p className="change">{this.state.quarters}</p>
                </div>
                <div className="gridRow">
                  <p>Dimes</p>
                  <p className="change">{this.state.dimes}</p>
                </div>
                <div className="gridRow">
                  <p>Nickels</p>
                  <p className="change">{this.state.nickels}</p>
                </div>
                <div className="gridRow">
                  <p>Pennies</p>
                  <p className="change">{this.state.pennies}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

function handleAlert(due, received) {
  due = parseFloat(due);
  received = parseFloat(received);
  let change = Math.abs(received - due).toFixed(2);
  
  if (received < due) {
    $("#alertPanel").removeClass().addClass("panel panel-danger")
    $("#alertPanel").text(`You still owe ${change}`);
  } else{
    let change = (received - due).toFixed(2);
    $("#alertPanel").removeClass().addClass("panel panel-success").addClass("alert alert-success");
    $("#alertPanel").text(`The total change due is $${change}`);
  }
}

export default App;
