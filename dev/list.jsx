import React from 'react';

class List extends React.Component {
    handleClick(i) {
        this.props.toggleStatus(i);
    }

    render() {
        const itemsArray = this.props.items() || [];
        const list = itemsArray.map( (item, i) => <li className={ item.done ? 'done' : '' } key={"item" + i.toString()} onClick={ this.handleClick.bind(this, i) } >{item.txt}</li> );
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default List;