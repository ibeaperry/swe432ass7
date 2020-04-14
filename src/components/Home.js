import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import './Home.css';
// import StarRating from './star';

const buildings = [
  {
      value: "Robinson",
      lable: 'Robinson',
  },
  {
      value: "JC",
      lable: 'Johnson Center',
  },
  {
      value: "exploratory",
      lable: 'Exploratory',
  },
  {
      value: "innovation",
      lable: 'Innovation',
  },
  {
      value: "engineering",
      lable: 'Engineering Building',
  },
]
const Star = ({ selected=false, onClick=f=>f }) =>
<div className={(selected) ? "star selected" : "star"}
    onClick={onClick}>
</div>
Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.changeFirst = this.changeFirst.bind(this);
    this.changeLast = this.changeLast.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.buildingChange = this.buildingChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.starChange = this.starChange.bind(this);
    this.changeComment = this.changeComment.bind(this);
    this.state={
      first:'',
      last:'',
      email:'',
      number:'',
      building:'',
      visit:null,
      rate:0,
      comment:'',
      starSelected: 0,
      testData:''
    };
  }
  handleSubmit(event){
    const data = new FormData();
    data.append('first_name',this.state.first)
    data.append('last_name',this.state.last)
    data.append('email',this.state.email)
    data.append('number',this.state.number)
    data.append('building',this.state.building)
    data.append('Date_of_Visit',this.state.date)
    data.append('rating',this.state.starSelected)
    data.append('Comments',this.state.comment)
    fetch('https://swe471-proj1.herokuapp.com/server', {
      method: 'POST',
      body: data
    })
    .then((response) => response.json())
    .then((data) =>{
      console.log('Success: ', data);
    })
    .catch((error) => {
      console.log('Error: ', error)
    });
  }
  changeFirst(rating){
    this.setState({
      first: rating.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  changeLast(rating){
    this.setState({
      last: rating.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  changeEmail(rating){
    this.setState({
      email: rating.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  changeNumber(rating){
    this.setState({
      number: rating.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  buildingChange(build){
    this.setState({
      building: build.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  dateChange(date){
    this.setState({
      visit: date,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  starChange(starsSelected){
    this.setState({
      starSelected: starsSelected,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    });
    console.log(this.state);
  }
  changeRating(rating){
    this.setState({
      rate: rating,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    })
  }
  changeComment(rating){
    this.setState({
      comment: rating.target.value,
      testData: this.state.first + this.state.last +this.state.email+this.state.number+this.state.building+this.state.visit+this.state.rate+this.state.comment+this.state.starSelected
    });
    console.log(this.state);
  }
  render(){
    const totalStars = 5;
    const starsSelected = this.state.starSelected;
    return(
      <div>
        <form /*method="POST" action="https://swe471-proj1.herokuapp.com/server"*/>
        <TextField
          required
          name='first_name'
          value={this.state.first}
          id="filled-required"
          style={{width: '48%'}} 
          label="First Name"
          variant="filled"
          onChange={this.changeFirst}
        />
        <TextField
          required
          name='last_name'
          value={this.state.last}
          id="filled-required"
          style={{width: '48%'}} 
          label="Last Name"
          variant="filled"
          onChange={this.changeLast}
        />
        <TextField
          required
          name='email'
          value={this.state.email}
          id="filled-required"
          style={{width: '98%'}} 
          label="Email Address"
          variant="filled"
          onChange={this.changeEmail}
        />
        <TextField
          required
          name='number'
          value={this.state.number}
          id="filled-required"
          style={{width: '98%'}} 
          label="Contact Number (123-456-7890)"
          variant="filled"
          onChange={this.changeNumber}
        />
        <TextField
          required select
          name='building'
          value={this.state.building}
          id="filled-required"
          style={{width: '98%'}} 
          label="Building"
          value={this.state.build}
          onChange={this.buildingChange}
          variant="filled"
        >   
        {buildings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.lable}
            </MenuItem>
        ))}
            </TextField>
        
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    name='Date_of_Visit'
                    value={this.state.visit}
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={this.state.visit}
                    style={{width: '98%'}} 
                    onChange={this.dateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
        </MuiPickersUtilsProvider>

        <div className="star-rating" name='rating' value={this.state.starsSelected}>
          
          {[1,2,3,4,5].map((n, i) =>
               <Star key={i}
               name='rating'
               id='rating'
               value={this.state.starsSelected}
                     selected={i < starsSelected}
                     onClick={() => this.starChange(i+1)}
              />)}

            <p>{starsSelected} of {totalStars} stars</p>
        </div>
        
        <TextField
               name='Comments'
               value={this.state.comment}
          id="filled-input"
          label="Comments"
          variant="filled"
          style={{width: '98%'}} 
          onChange={this.changeComment}
        />
        <button onClick={this.handleSubmit}>Take the shot!</button>
        
        </form>
      </div>
    );
  }
}
export default App;