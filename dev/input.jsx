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
            <div>
                <div>
                    <label htmlFor={this.props.id}>Item to add</label>
                </div>
                <div>
                    <input id={this.props.id} onKeyPress={handleKeyPress} />
                    <button onClick={handleClick} >Add</button>
                    <button onClick={this.props.clearItemsList}>X</button>
                </div>
            </div>
        );
    }
}

export default Input;