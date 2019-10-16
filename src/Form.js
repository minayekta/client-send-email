import React from 'react';
import App from './App'

import BootStrap from "bootstrap"
 class Form extends React.Component{
     
render(){
return (
    <div className="container-fluid ">
        <div className="row">
        <div className="col-md-6">
            
            <img src="./img-01.png" className=" mx-auto d-block img-fig"></img>
           
        </div>
            <div className="col-md-6 pt-5">
                <h1>Send Email</h1>
                <form className="from-send w-50 mt-3">
                    <div className="form-group">
                        <label>
                        Subject:
                        
                        </label>
                        <input  type="text" name="subject" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>
                        Email:
                        
                        </label>
                        <input  type="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>
                        Message:
                        
                        </label>
            f            <textarea    rows="8"  name="message" className="form-control" />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary w-100 btn-color" />
                </form>
            </div>
            
        </div>
    </div>
)
}
}

export default Form ;