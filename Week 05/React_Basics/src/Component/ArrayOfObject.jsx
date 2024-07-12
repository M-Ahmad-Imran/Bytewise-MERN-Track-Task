import { useState } from "react";

const ArrayOfObject = () => {
    const [cars, setCars] = useState([]);
    const [years, setYear] = useState(new Date().getFullYear());
    const [companys, setCompany] = useState('');
    const [models, setModel] = useState('');

    const HandleAddCars = () => {
        const newCar = {
            Year: years,
            Company: companys,
            Model: models
        }

        if (newCar.Company !== "") {
            setCars(c => [...c, newCar])
        }

        setYear(new Date().getFullYear());
        setCompany("");
        setModel("");
    }

    const HandleDeleteCars = (i) => {
        setCars(cars.filter((_, index) => index !== i))
    }

    const HandleCarYear = (e) => {
        setYear(e.target.value)
    }

    const HandleCompany = (e) => {
        setCompany(e.target.value)
    }

    const HandleCarModel = (e) => {
        setModel(e.target.value)
    }

    return (
        <div className="my-14 flex flex-col lg:basis-4/12 justify-center border md:mx-0 mx-3  md:p-11 p-6">
            <h1 className="text-4xl p-3">Update View of Array of Object in State</h1>
            <label>Year</label>
            <input
                type="number"
                placeholder="Enter the year of your Mobile/Car"
                value={years}
                onChange={HandleCarYear}
                className="bg-slate-500 p-3 m-1" />
            <label>Company</label>
            <input
                type="text"
                placeholder="Enter the Company of your Mobile/Car"
                value={companys}
                onChange={HandleCompany}
                className="bg-slate-500 p-3 m-1" />
            <label>Model</label>
            <input
                type="text"
                placeholder="Enter the Model of your Mobile/Car"
                value={models}
                onChange={HandleCarModel}
                className="bg-slate-500 p-3 m-1" />
            <button onClick={HandleAddCars} className="bg-teal-800 p-3 text-white">Add</button>
            <ul>
                {cars.map((car, i) =>
                    <li key={i} className="m-2 p-3 bg-cyan-900 flex justify-between">
                        {car.Company} {car.Year} {car.Model}
                        <button onClick={() => { HandleDeleteCars(i) }}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ArrayOfObject
