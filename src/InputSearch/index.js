import React, {useState} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiphy} from '../action';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

function InputSearch(props) {
const [val, setval] = useState('')

const searchGiphyByName = event =>{
    event.preventDefault();
    props.getGiphy(val)
    setval('')
}

    return (
        <div>
            <form 
            style={{
                textAlign:'center',
                padding:'3%',
                marginBottom:'4%',    
            }}
            onSubmit={searchGiphyByName}
            >
                <input type="text"
                        value={val}
                        onChange={(event)=>{
                            setval(event.target.value)
                        }}
                        placeholder='enter name by Giphy'
                />
                <button 
                startIcon={<SearchIcon/>}
                style={{
                        color:'black',
                        height:'22px',
                }}>search</button>
            </form>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getGiphy}, dispatch)
}
export default connect (null, mapDispatchToProps)(InputSearch)