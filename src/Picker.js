import React from "react";
import allCoins from "./symbols.json";
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
        obj[selectorId].options = this.state.coins[event.target.value];
        obj[selectorId].symbol = "";
        this.setState({
            selections: obj
        });
    }

    /**
     * Handle the Symbol select change.
     *
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
            selections: obj
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
                    <div className="selector-wrap">
                        <label htmlFor="exchange-a1">
                            Exchange
                            <select
                                id="exchange-a1"
                                value={this.state.selections.a1.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-a1">
                            Symbol
                            <select
                                id="symbol-a1"
                                value={this.state.selections.a1.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.a1.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.a1.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-b1">
                            Exchange
                            <select
                                id="exchange-b1"
                                value={this.state.selections.b1.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-b1">
                            Symbol
                            <select
                                id="symbol-b1"
                                value={this.state.selections.b1.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.b1.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.b1.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-c1">
                            Exchange
                            <select
                                id="exchange-c1"
                                value={this.state.selections.c1.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-c1">
                            Symbol
                            <select
                                id="symbol-c1"
                                value={this.state.selections.c1.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.c1.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.c1.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                {/* ------ New Row ------*/}

                <div className="row">
                    <h4>Row 2</h4>
                    <div className="selector-wrap">
                        <label htmlFor="exchange-a2">
                            Exchange
                            <select
                                id="exchange-a2"
                                value={this.state.selections.a2.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-a2">
                            Symbol
                            <select
                                id="symbol-a2"
                                value={this.state.selections.a2.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.a2.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.a2.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-b2">
                            Exchange
                            <select
                                id="exchange-b2"
                                value={this.state.selections.b2.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-b2">
                            Symbol
                            <select
                                id="symbol-b2"
                                value={this.state.selections.b2.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.b2.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.b2.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-c2">
                            Exchange
                            <select
                                id="exchange-c2"
                                value={this.state.selections.c2.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-c2">
                            Symbol
                            <select
                                id="symbol-c2"
                                value={this.state.selections.c2.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.c2.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.c2.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                {/* ------ New Row ------*/}

                <div className="row">
                    <h4>Row 3</h4>
                    <div className="selector-wrap">
                        <label htmlFor="exchange-a3">
                            Exchange
                            <select
                                id="exchange-a3"
                                value={this.state.selections.a3.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-a3">
                            Symbol
                            <select
                                id="symbol-a3"
                                value={this.state.selections.a3.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.a3.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.a3.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-b3">
                            Exchange
                            <select
                                id="exchange-b3"
                                value={this.state.selections.b3.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-b3">
                            Symbol
                            <select
                                id="symbol-b3"
                                value={this.state.selections.b3.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.b3.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.b3.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="selector-wrap">
                        <label htmlFor="exchange-c3">
                            Exchange
                            <select
                                id="exchange-c3"
                                value={this.state.selections.c3.exchange}
                                onChange={this.handleExchangeChange}
                                onBlur={this.handleExchangeChange}
                            >
                                <option>Select</option>
                                {this.state.exchanges.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="symbol-c3">
                            Symbol
                            <select
                                id="symbol-c3"
                                value={this.state.selections.c3.symbol}
                                onChange={this.handleSymbolChange}
                                onBlur={this.handleSymbolChange}
                                disabled={this.state.selections.c3.options.length === 0}
                            >
                                <option>Select</option>
                                {this.state.selections.c3.options.map(exchange => (
                                    <option key={exchange} value={exchange}>
                                        {exchange}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                <a href={this.state.targetUrl} className="btn btn-primary">
                    Get Charts <span>🚀</span>
                </a>
            </div>
        );
    }
}

export default Picker;
