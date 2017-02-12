import React from 'react';

class Input extends React.Component {
    render () {
        const self = this;
        function handleKeyPress(e) {
            if (e.which === 13) {
                handleClick();
            }
        }

        function handleClick() {
            const item = document.getElementById(`${self.props.id}`);
            if (item.value) {
                self.props.addItem(item.value);
                item.value = "";
            }
        }
        return (
            <div className="app=menu">
                <div className="app-input-label">
                    <label htmlFor={this.props.id}>Item to add</label>
                </div>
                <div className="app-input" >
                    <input id={this.props.id} onKeyPress={handleKeyPress} placeholder="Item" />
                    <button onClick={handleClick} >Add</button>
                    <button onClick={this.props.clearItemsList}>Clear</button>
                </div>
            </div>
        );
    }
}

export default Input;