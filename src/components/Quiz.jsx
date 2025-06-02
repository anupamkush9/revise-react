import { useState } from 'react';
import { Data } from '../components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState(0);
    const [marks, setMarks] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleInput = (event) => {
        setSelectedOption(event.target.value);
    }


    const handleNext = () => {
        if (data[index].ans === selectedOption) {
            setMarks(marks + 1);
        }

        if (index < data.length) {
            setIndex(index + 1);
        }
            // Quiz completed
            setSelectedOption(null);
    }

    return (
        <div className="container mt-5">
            <div className="card shadow">
                {index < data.length ?
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Quiz App</h2>
                    <div className="d-flex justify-content-between">
                        <span>Question {index + 1} of {data.length}</span>
                        <span>Score: {marks}/{data.length}</span>
                    </div>
                </div> :""}

                <div className="card-body" id="quiz_id">
                    {index < data.length ? (
                        <>
                            <div className="mb-4">
                                <h4 className="card-title">Q: {data[index].q}</h4>
                            </div>

                            <div className="list-group mb-4">
                                <label className="list-group-item">
                                    <input
                                        type="radio"
                                        name="select"
                                        className="form-check-input me-2"
                                        value={data[index].a}
                                        onChange={handleInput}
                                        checked={selectedOption === data[index].a}
                                    />
                                    A: {data[index].a}
                                </label>

                                <label className="list-group-item">
                                    <input
                                        type="radio"
                                        name="select"
                                        className="form-check-input me-2"
                                        value={data[index].b}
                                        onChange={handleInput}
                                        checked={selectedOption === data[index].b}
                                    />
                                    B: {data[index].b}
                                </label>

                                <label className="list-group-item">
                                    <input
                                        type="radio"
                                        name="select"
                                        className="form-check-input me-2"
                                        value={data[index].c}
                                        onChange={handleInput}
                                        checked={selectedOption === data[index].c}
                                    />
                                    C: {data[index].c}
                                </label>

                                <label className="list-group-item">
                                    <input
                                        type="radio"
                                        name="select"
                                        className="form-check-input me-2"
                                        value={data[index].d}
                                        onChange={handleInput}
                                        checked={selectedOption === data[index].d}
                                    />
                                    D: {data[index].d}
                                </label>
                            </div>

                            <button
                                className={`btn btn-primary ${!selectedOption ? 'disabled' : ''}`}
                                onClick={handleNext}
                            >
                                {index < data.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            <h3 className="text-success">Quiz Completed!</h3>
                            <p className="lead">Your final score is: {marks}/{data.length}</p>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setIndex(0);
                                    setMarks(0);
                                    setSelectedOption(null);
                                }}
                            >
                                Restart Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz;