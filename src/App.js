import React, { Component } from "react";
import { Router } from "@reach/router";
import Picker from "./Picker";
import "./App.css";
import "./bootstrap.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <header>
                        <h1>Crypto Chart Picker</h1>
                        <p>
                            Allows you to pick which markets show in the chart grid on the{" "}
                            <a href="https://cryptotrading.toys">https://cryptotrading.toys</a> website.
                        </p>
                        <p>
                            Works by taking your chosen markets and creating a new URL with those markets as query
                            parameters. You can select up to 9 markets which show in a 3x3 grid. Selecting a lower
                            number of markets will still work and the charts will adjust in size accordingly.
                        </p>
                    </header>
                </div>

                <Router>
                    <Picker path="/" />
                </Router>
            </div>
        );
    }
}

export default App;
