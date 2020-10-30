import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';

const Counter = (props) => {

    const reset = () => {
        return (
            counter = 0
        )
    };

    return (
        <div className="container rounded-lg">
            <div className="row">
                <div className="col-md-10 timer">
                    <div className="clock mr-5">
                        <i class="far fa-clock"></i>
                    </div>
                    <div className="hour2">{props.hour2}</div>
                    <div className="hour1">{props.hour1}</div>
                    <p>:</p>
                    <div className="minute2">{props.minute2 % 6}</div>
                    <div className="minute1">{props.minute1 % 10}</div>
                    <p>:</p>
                    <div className="second2">{props.second2 % 6}</div>
                    <div className="second1">{props.second1 % 10}</div>
                </div>
                <div className="col-md-2">
                    <button type="button" class="btn btn-danger" onClick={() => reset()}>Reset</button>
                </div>
            </div>
        </div>
    );
}

Counter.propTypes = {
    second1: PropTypes.number,
    second2: PropTypes.number,
    minute1: PropTypes.number,
    minute2: PropTypes.number,
    hour1: PropTypes.number,
    hour2: PropTypes.number,
};

let counter = 0;

const timer = () => {

    const digitSix = 0;
    const digitFive = 0;
    const digitFour = Math.floor(counter / 600);
    const digitThree = Math.floor(counter / 60);
    const digitTwo = Math.floor(counter / 10);
    const digitOne = Math.floor(counter / 1);
    counter++;

    ReactDOM.render(
        <Counter second1={digitOne} second2={digitTwo} minute1={digitThree} minute2={digitFour} hour1={digitFive} hour2={digitSix} />,
        document.querySelector("#root")
    );
}

const set = setInterval(timer, 1000);