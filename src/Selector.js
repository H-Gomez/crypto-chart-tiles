import React from "react";
import PropTypes from 'prop-types'

class Selector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectionId = this.props.identifier;
        return (
            <div className="selector-wrap">
                <label htmlFor={"symbol-" + this.props.identifier}>
                    Exchange
                    <select
                        id={"symbol-" + this.props.identifier}
                        value={this.props.selections[selectionId].exchange}
                        onChange={this.props.handleExchangeChange}
                        onBlur={this.props.handleExchangeChange}
                    >
                        <option />
                        {this.props.exchanges.map(exchange => (
                            <option key={exchange} value={exchange}>
                                {exchange}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor={"symbol-" + this.props.identifier}>
                    Symbol
                    <select
                        id={"symbol-" + this.props.identifier}
                        value={this.props.selections[selectionId].symbol}
                        onChange={this.props.handleSymbolChange}
                        onBlur={this.props.handleSymbolChange}
                        disabled={this.props.selections[selectionId].options.length === 0}
                    >
                        {this.props.selections[selectionId].options.map(exchange => (
                            <option key={exchange} value={exchange}>
                                {exchange}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        );
    }
}

Selector.propTypes = {
    identifier: PropTypes.string,
    selections: PropTypes.any,
    handleExchangeChange: PropTypes.any,
    handleSymbolChange: PropTypes.any,
    exchanges: PropTypes.any

}

export default Selector;
