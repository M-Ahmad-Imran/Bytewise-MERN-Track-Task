import { useState } from "react"

const Array = () => {
    const [fruits, setFruit] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddFood = () => {
        if (input.trim() !== '') {
            setFruit(f => [...f, input]);
            setInput('');
        }
    }

    const handleRemoveFood = (index) => {
        setFruit(fruits.filter((_, i) => i !== index));
    }

    return (
        <div className="my-14 flex flex-col lg:lg:basis-[30.99%] justify-center border md:mx-0 mx-3  md:p-11 p-6">
            <h1 className="text-4xl p-3">TODO List Update View of Array in State</h1>
            <input 
                type="text" 
                id="newfruit" 
                className="bg-slate-500 p-3 m-1" 
                placeholder="Enter Any String..."
                value={input} 
                onChange={handleInputChange} 
            />
            <button 
                className="bg-teal-800 p-3 text-white" 
                type="button" // Change button type to button
                onClick={handleAddFood}
            >
                Add
            </button>
            <ul>
                {fruits.map((food, i) =>
                    <li key={i} className="m-2 p-3 bg-cyan-900 flex justify-between">
                        {food}
                        <button onClick={() => handleRemoveFood(i)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Array
