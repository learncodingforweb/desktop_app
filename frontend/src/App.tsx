import { signal } from "@preact/signals-react";
import { FC } from "react";


const App: FC = () => {
    const counter = signal(0);

    return(
        <>
            <h1>Home Page</h1>
            <p>Count {counter.value}</p>
            <button onClick={()=> counter.value++}>Inc</button>
            <button onClick={()=> counter.value--}>Dec</button>
        </>
    )
}

export default App;
