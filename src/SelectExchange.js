import React from "react";
import "./App.css";

class ExchangeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            
        }
    }

    render() {
        return (
            <label htmlFor="exchange-a1">
                Exchange
                <select
                    id="exchange-a1"
                    value={this.state.selections.a1.exchange}
                    onChange={this.handleExchangeChange}
                    onBlur={this.handleExchangeChange}
                >
                    <option />
                    {this.state.exchanges.map(exchange => (
                        <option key={exchange} value={exchange}>
                            {exchange}
                        </option>
                    ))}
                </select>
            </label>
        );
    }
}

export default ExchangeSelect;
