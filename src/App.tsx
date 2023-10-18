import './App.css'
import Circle from "./Circles/Circle.tsx";
import {useState} from "react";

function App() {
    const [number, setNumber] = useState([
        {number: 5},
        {number: 11},
        {number: 16},
        {number: 23},
        {number: 32},
    ])
    const changeNum = () => {
        const numArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            const num: number = (Math.ceil(Math.random() * 36));
            numArray.push(num);
        }
        numArray.sort((a, b) => a - b);
        console.log(numArray);

        setNumber([
            {number: numArray[0]},
            {number: numArray[1]},
            {number: numArray[2]},
            {number: numArray[3]},
            {number: numArray[4]},
        ])
    };

    // const [people, setPeople] = useState([
    //     {name: 'Jane', age: 20, hobby: 'Video games'},
    //     {name: 'John', age: 30, hobby: 'Knitting'},
    // ]);
    //
    // const changeName = () => {
    //     setPeople([
    //         {name: 'Jane Block', age: 20, hobby: 'Video games'},
    //         {name: 'John Doe', age: 30, hobby: 'Knitting'},
    //     ])
    // };

    return (
        <>
            <button onClick={changeNum}>New numbers</button>
            <div className="main">
                <Circle number={number[0].number}/>
                <Circle number={number[1].number}/>
                <Circle number={number[2].number}/>
                <Circle number={number[3].number}/>
                <Circle number={number[4].number}/>
            </div>
        </>
    )
}

export default App
