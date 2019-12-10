import React from 'react';

const Form = (props) => {
    return(
       <div className='form-div'>
            <form onSubmit={props.handleFormSubmission}> 
                <input type='text' value={props.todo}/>
            </form>

       </div> 
    )
}

export default Form;