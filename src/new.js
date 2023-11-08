import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let array = [
    { movie: 'Leo', yor: 2023, img: '/image/ant.jpg' },
    { movie: 'Varisu', yor: 2023, img: 'image/ant.jpg' },
    { movie: 'Beast', yor: 2022, img: 'image/ant.jpg' },
    { movie: 'Master', yor: 2021, img: 'image/ant.jpg' },
    { movie: 'Bigil', yor: 2019, img: 'image/ant.jpg' }
];


function Movies(props) {
    return (
        <div className="card">
            <img src={props.img} height="300" width="300" alt="" />
        
            <h2>Movie Name: {props.movie}</h2>
            <h3>Year Of Release: {props.yor}</h3>
        </div>
    );
}

function MovieList(props) {
    return (
        <div className="main">
            {props.array.map(element => (
                <Movies key={element.movie} movie={element.movie} yor={element.yor} />
            ))}
        </div>
    );
}

ReactDOM.render(<MovieList array={array} />, document.getElementById("main"));
