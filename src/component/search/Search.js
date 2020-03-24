import React, { Component } from 'react'
//importing text field from material ui
import TextField from 'material-ui/TextField';
//same like that import selectfield from material-ui
import SelectField from 'material-ui/SelectField'
//Menu item is imported from material-ui from menu Item//
import MenuItem from 'material-ui/MenuItem'
import Axios from 'axios';
import ImageResults from '../image-result/ImageResults';


class Search extends Component {
    state={
        searchText:'',
        amount:15,
        apiUrl:'https://pixabay.com/api',
        apikey:'15710564-ca876171be21657553e5b7003',
        images:[]
    }

    onTextChange=(e)=>{
       const val=e.target.value;
        this.setState({
           
            [e.target.name]:val,
           
        },

        ()=>{
            if(val===''){
                this.setState({
                    images:[]
                })
            }else{
                
            Axios.get(`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo=photo
            &per_page=${this.state.amount}&safesearch=true`)
            .then(res=>this.setState({
                images:res.data.hits
            }))
            .catch(err=>console.log(err))
            } 
        })     
    }

    onAmountChange=(e, index, value)=>{
        this.setState({
            amount:value
        })

    }

  render() {
      console.log(this.state)
    return (
      <div>
        <TextField
        name='searchText'
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText=" Search images" //This is material ui attribute
        fullWidth='true' // this is material ui attribute to make the text field width full
        />
        <br/>
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >

        
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </div>
    )
  }
}

export default Search
