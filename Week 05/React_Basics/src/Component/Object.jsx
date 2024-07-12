import { useState } from "react";


const Object = () => {

    const [mobile, setMobile] = useState({});

    const HandleYear = (e) => {
        setMobile(m => ({ ...m, year: e.target.value }));
    }
    const HandleMake = (e) => {
        setMobile(m => ({ ...m, make: e.target.value }));
    }
    const HandleModel = (e) => {
        setMobile(m => ({ ...m, model: e.target.value }));
    }

    return (
        <div className="my-14 flex flex-col lg:basis-4/12 justify-center border md:mx-0 mx-3  md:p-11 p-6">
            <h1 className="text-4xl p-3">View of Object in State With onChange</h1>
            <ol>
                <li className="m-2 p-3 bg-cyan-900 flex justify-between">Year:{mobile.year} <br /> Make:{mobile.make} <br /> Model:{mobile.model}</li>
            </ol>
            <label>Year</label>
            <input
                type="number"
                placeholder="Enter the year of your Mobile/Car"
                onChange={HandleYear}
                className="bg-slate-500 p-3 m-1" />
            <label>Make</label>
            <input
                type="text"
                placeholder="Enter the Make of your Mobile/Car"
                onChange={HandleMake}
                className="bg-slate-500 p-3 m-1" />
            <label>Model</label>
            <input
                type="text"
                placeholder="Enter the Model of your Mobile/Car"
                onChange={HandleModel}
                className="bg-slate-500 p-3 m-1" />
        </div>
    )
}

export default Object
