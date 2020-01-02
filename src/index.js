import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ArrowNavigation } from "react-arrow-navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Tiles from './components/Tiles'
import Input from './components/input'
// import { Provider } from 'react-redux'
// import store from './components/redux/store'
const MyApp = () => {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)
    const myComponents = [];
    let i = 0;
    let j = 0;
    for (i = 0; i < n; i++) {
        myComponents[i] = [];
        for (j = 0; j < n; j++) {
            myComponents[i][j] = (
                <Tiles

                    x={j}
                    y={i}

                />
            );
        }
    }


    return (
        // <Provider store={store}>
        <>
            <div className="container">
                <center>
                    <h2>Arrow Key Navigation</h2>
                </center>
                <br />
                {!n ? <p>Please Type some number on N x N Grid</p> : ""}
                <form>
                    <div className="form-row">
                        <div className="col-3">
                            <Input label="N x N Grid"
                                type="text" name="N x N Grid"
                                onChange={
                                    ({ currentTarget }) => {
                                        setN(currentTarget.value)
                                    }

                                }
                                className="form-control" />
                        </div>
                        <div className="col-3">
                            <Input label="Maximum no. of Moves"
                                type="text" name="Maximum no. of Moves"
                                className="form-control"
                                onChange={
                                    ({ currentTarget }) => {
                                        setM(currentTarget.value)
                                    }
                                }
                            />
                        </div>
                    </div>

                </form>
                <div className="row">
                    <br />
                </div>
                {n ?
                    <p>
                        Focus the button group, then you can navigate through the buttons with
                        arrow keys:
      </p> : ""
                }              <ArrowNavigation>

                    {myComponents.map(row => {
                        return (
                            <div className="row">
                                {row.map(cell => (
                                    <button className="btn btn-outline-primary btn-lg">
                                        {cell}
                                    </button>
                                ))}
                            </div>
                        );
                    })}

                </ArrowNavigation>

            </div>
        </>
        // {/* </Provider> */ }
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);