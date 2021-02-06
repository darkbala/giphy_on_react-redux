import React from 'react'
import {connect} from 'react-redux'

function Output(props) {
    return (
        <div 
            style={{
                width:'100%',
                justifyContent:'space-around',
                textAlign:'center',
                display:'grid',
                gridTemplateColumns:'30% 30% 30%'
            }}
        >
            {
                props.giphy[0] ?
                props.giphy[0].map(el=>{
                    return(
                        <div key={el.id}>
                        <iframe src={el.embed_url} frameBorder='3' style={{width:'300px', height:'200px',background:'black'}} ></iframe>
                            <p style={{
                                background:'white',
                                color:'black',
                                height:'30px',
                                fontWeight:'bold',
                                alignItems:'center',

                            }}>{el.title}</p>
                        </div>
                    )
                })
                :<h1 style={{
                    color:'white',
                }}>ДАННЫX ПОКА НЕТ ...</h1>
            }
        </div>
    )
}
function mapStateToProps({giphy}){
    return {giphy}
}
export default connect (mapStateToProps)(Output)