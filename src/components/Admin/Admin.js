import React from 'react';

const Admin = () => {

    const volunteer = [

        {id:1,title:'Child Support',imgUrl:'childSupport.png'},
        {id:2,title:'Refuse Shelter',imgUrl:'refuseShelter.png'},
        {id:3,title:'Food Cherity',imgUrl:'foodCharity.png'},
        {id:4,title:'Host and Clothing Swap',imgUrl:'clothSwap.png'},
        {id:5,title:'Host a river Cleane-up',imgUrl:'riverClean.png'},
        {id:6,title:'Cleane water for Children',imgUrl:'cleanWater.png'},
        {id:7,title:'Good Education',imgUrl:'goodEducation.png'},
        {id:8,title:'New books for Children',imgUrl:'newBooks.png'},
        {id:9,title:'host a study grup',imgUrl:'studyGroup.png'},
        {id:10,title:'build bird house for your neighbour',imgUrl:'birdHouse.png'},
        {id:11,title:'Organic book for at the librery',imgUrl:'libraryBooks.png'},
        {id:12,title:'givr a seminer a drivign sefety',imgUrl:'driveSafety.png'},
        {id:13,title:'give free music lesson',imgUrl:'musicLessons.png'},
        {id:14,title:'tech people how to resister to vote',imgUrl:'voteRegister.png'},
        {id:15,title:'cleane up your local park',imgUrl:'clearnPark.png'},
        {id:16,title:'give it help to local audats',imgUrl:'ITHelp.png'},
        {id:17,title:'forest a shelter animal',imgUrl:'animalShelter.png'},
        {id:18,title:'babyseet PTA meeting',imgUrl:'babySit.png'},
        {id:19,title:'collect stuffed animal',imgUrl:'stuffedAnimals.png'},
        {id:20,title:'collect school suplies',imgUrl:'schoolSuffiles.png'}
  
  ]



    const addVolunteer = () => {

        fetch('http://localhost:5000/addvolunteer',{

            method : 'post',
            headers : {
                'Content-type':'application/json'

            },
            body : JSON.stringify(volunteer)

        })


    }
    return (
        <div>
            <button onClick={addVolunteer}>add volunteer</button>
            <h3>admin panel</h3>
        </div>
    );
};

export default Admin;