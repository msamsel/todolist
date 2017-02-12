import React from 'react';
import Input from './input.jsx';

class Menu extends React.Component {
    render() {
        return (
            <Input id="addButton" addItem={this.props.addItem} clearItemsList={this.props.clearItemsList} />
        );
    }
}

export default Menu;