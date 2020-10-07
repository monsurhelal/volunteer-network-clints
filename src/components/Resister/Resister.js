import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Resister.css';

const Resister = () => {


    const [user,setUser] = useState({
        name:'',
        number:'',
        date:'',
        description:'',
        eventsName:''
    })

const handleBlur = (e) => {

let fild = true;

if(e.target.name === "name"){

    fild = e.target.value;

}
if(e.target.name === "number"){

    fild = e.target.value;

}
if(e.target.name === "date"){

    fild = e.target.value;

}
if(e.target.name === "description"){

    fild  = e.target.value;

}
if(e.target.name === "eventsName"){

    fild = e.target.value;

}
if(fild){

const mainUser = {...user};
mainUser[e.target.name] = e.target.value;
setUser(mainUser)

}

}


const handleSubmit = data => {

const userDetail = user;

fetch('https://murmuring-meadow-24358.herokuapp.com/resister',{

    method : 'post',
    headers : {
        'Content-type':'application/json'

    },
    body : JSON.stringify(userDetail)


})
.then(res => res.json())
.then(data => {

    if(data){
        
        alert('resister successfully')
    }

})

}



    return (
        <div>
            
                <div className="logo">

                <img src={logo} alt=""/>

                </div>

                <form action="" className="resistetion-box" onSubmit={handleSubmit}>

                    <h2>Resister as a volunteer</h2>
                <input type="text" name="name" onBlur={handleBlur} placeholder="Full Name"/>
                <input type="text" name="number" onBlur={handleBlur} placeholder="User name or phone"/>
                <input type="date" name="date" onBlur={handleBlur} id=""/>
                <input type="text" name="description" onBlur={handleBlur} placeholder="description"/>
                <input type="text" name="eventsName" onBlur={handleBlur}  placeholder="organize books at the librery"/>
                <Link to="/eventslist"><input type="submit" value="resistetion" /></Link>



                </form>

           
        </div>
    );
};

export default Resister;