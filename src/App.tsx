import './App.css'
import Circle from "./Circles/Circle.tsx";

function App() {
    return (
        <>
            <button>New numbers</button>
            <Circle number={5} />
            <Circle number={11} />
            <Circle number={16} />
            <Circle number={23} />
            <Circle number={32} />
        </>
    )
}

export default App
