import React, { useState } from 'react'
import HeroImg from '../src/Components/img/dietimg.png';

const BimCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const calculateBmi = (e) => {
        e.preventDefault();

        // Validate height and weight inputs to ensure they are numbers
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);

        if (isValidHeight && isValidWeight && height && weight) {
            const heightInMeter = height / 100;
            const bmiValue = weight / (heightInMeter * heightInMeter);
            setBmi(bmiValue.toFixed(2));

            // Set BMI status based on the calculated BMI
            if (bmiValue < 18.5) {
                setBmiStatus('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setBmiStatus('Normal weight');
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setBmiStatus('Overweight');
            } else {
                setBmiStatus('Obese');
            }

            setErrorMsg(''); // Clear error message if inputs are valid
        } else {
            setBmi(null);
            setBmiStatus('');
            setErrorMsg('Please enter valid numeric values for height and weight');
        }
    };

    const clearAll = () => {
        setHeight('');
        setWeight('');
        setBmi(null);
        setBmiStatus('');
        setErrorMsg('');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row justify-around items-center mx-auto">
                <div className="w-full md:w-1/2 lg:w-2/5 xl:w-3/5">
                    <img src={HeroImg} alt="BMI image" />
                </div>
                <form
                    className="border shadow-md shadow-lime-300 flex flex-col p-3 m-5 w-full md:w-3/4 lg:w-1/2 xl:w-3/5 md:items-center gap-1 py-10 bg-white"
                    onSubmit={calculateBmi}
                >
                    <h1 className="text-2xl text-lime-900 p-6 uppercase font-bold">BMI Calculator</h1>
                    {errorMsg && <p className="text-red-600 text-lg p-2 ">{errorMsg}</p>}
                    <div className="flex flex-col md:flex-row my-2">
                        <label htmlFor="height" className="text-lg px-2">
                            <span className="text-red-500 text-xl">*</span> Height (CM):
                        </label>
                        <input
                            type="number"
                            name="height"
                            value={height}
                            className="border border-gray-600 p-1 mx-4 text-lg md:w-80"
                            placeholder="Enter Your Height"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row my-2">
                        <label htmlFor="weight" className="text-lg px-2">
                            <span className="text-red-500 text-xl">*</span> Weight (KG):
                        </label>
                        <input
                            type="number"
                            name="weight"
                            value={weight}
                            className="border border-gray-600 p-1 mx-4 text-lg md:w-80"
                            placeholder="Enter Your Weight"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-lime-700 hover:bg-lime-800 capitalize cursor-pointer p-2 m-5 text-white text-xl px-6 font-medium rounded"
                        >
                            Calculate BMI
                        </button>
                        <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700 capitalize cursor-pointer p-2 m-5 text-white text-xl px-6 font-medium rounded"
                            onClick={clearAll}
                        >
                            Clear
                        </button>
                    </div>

                    {bmi !== null && (
                        <div className="my-5">
                            <p className="text-lg p-1 my-2">
                                Your BMI is: <strong className="text-xl">{bmi}</strong>
                            </p>
                            <h1 className="text-lg p-1 my-2">
                                Status: <strong className="text-xl capitalize">{bmiStatus}</strong>
                            </h1>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default BimCalculator;
