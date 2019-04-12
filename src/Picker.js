import React from "react";
import allCoins from "./symbols.json";
import Selector from "./Selector";
import "./App.css";

/**
 * Charts tiles are in the following layout
 * a1 - b1 - c1
 * a2 - b2 - c2
 * a3 - b3 - c3
 */

class Picker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetUrl: "",
            coins: {},
            exchanges: [],
            selections: {
                a1: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                b1: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                c1: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                a2: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                b2: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                c2: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                a3: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                b3: {
                    exchange: "",
                    symbol: "",
                    options: []
                },
                c3: {
                    exchange: "",
                    symbol: "",
                    options: []
                }
            }
        };

        this.handleExchangeChange = this.handleExchangeChange.bind(this);
        this.handleSymbolChange = this.handleSymbolChange.bind(this);
        this.urlBuilder = this.urlBuilder.bind(this);
        this.handleClearSelects = this.handleClearSelects.bind(this);
    }

    /**
     * Creates a URL based on the current choices from the select inputs which are
     * stored in the components state. Is called after a symbol is chosen.
     */
    urlBuilder() {
        let base = "https://cryptotrading.toys/crypto-panel/?interval=D&studies=&symbols=";
        let _selections = this.state.selections;
        let url = "";

        for (var key in _selections) {
            if (_selections[key].exchange === "") {
                continue;
            } else {
                url += `${_selections[key].exchange}%3A${_selections[key].symbol}%2C`;
            }
        }

        this.setState({
            targetUrl: base + url
        });
    }

    /**
     * Event handler for the exchange selectors. Creates a new object cloned
     * from the one in state and builds a new object with the selected exchange
     * and an array of coins that exchange owns.
     */
    handleExchangeChange(event) {
        let obj = { ...this.state.selections };
        let selectorId = event.target.id.split("-")[1];
        obj[selectorId].exchange = event.target.value;
        obj[selectorId].options = event.target.value === "" ? [] : this.state.coins[event.target.value];
        obj[selectorId].symbol = this.state.coins[event.target.value][0];

        this.setState(
            {
                selections: obj
            },
            this.urlBuilder
        );
    }

    /**
     * Handle the Symbol select change by setting state with the
     * respective selection objects symbol.
     */
    handleSymbolChange(event) {
        let obj = { ...this.state.selections };
        let selectorId = event.target.id.split("-")[1];
        obj[selectorId].symbol = event.target.value;

        this.setState(
            {
                selections: obj
            },
            this.urlBuilder
        );
    }

    /**
     * Clears all select inputs by interating over the object in state.
     */
    handleClearSelects() {
        let obj = { ...this.state.selections };
        for (var key in obj) {
            obj[key].exchange = "";
            obj[key].options = [];
            obj[key].symbol = "";
        }

        this.setState({
            selections: obj,
            targetUrl: ""
        });
    }

    /**
     * Get list of all coins from the local JSON file and create a new array
     * containing the exchange names based on the JSON keys. Set state after.
     */
    componentDidMount() {
        let _exchanges = [];
        for (var key in allCoins) {
            _exchanges.push(key);
        }

        this.setState({
            exchanges: _exchanges,
            coins: allCoins
        });
    }

    // Render out a selects for the chart pickers.
    render() {
        return (
            <div className="container">
                <a onClick={this.handleClearSelects}>Clear</a>
                <div className="row">
                    <h4>Row 1</h4>
                    <Selector
                        identifier="a1"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="b1"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="c1"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />
                </div>

                {/* ------ New Row ------*/}

                <div className="row">
                    <h4>Row 2</h4>
                    <Selector
                        identifier="a2"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="b2"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="c2"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />
                </div>

                {/* ------ New Row ------*/}

                <div className="row">
                    <h4>Row 3</h4>
                    <Selector
                        identifier="a3"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="b3"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />

                    <Selector
                        identifier="c3"
                        selections={this.state.selections}
                        coins={this.state.coins}
                        exchanges={this.state.exchanges}
                        handleExchangeChange={this.handleExchangeChange}
                        handleSymbolChange={this.handleSymbolChange}
                    />
                </div>

                <button
                    href={this.state.targetUrl}
                    className="btn btn-primary"
                    disabled={this.state.targetUrl === "" ? true : false}
                >
                    Get Charts{" "}
                    <span role="img" aria-label="rocket">
                        {" "}
                        🚀
                    </span>
                </button>
            </div>
        );
    }
}

export default Picker;
