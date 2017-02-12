import React from 'react';

class List extends React.Component {
    handleClick(i) {
        this.props.toggleStatus(i);
    }
    handleDelete(i, e) {
        e.stopPropagation();
        this.props.deleteItem(i);
    }

    render() {
        const itemsArray = this.props.items() || [];
        const list = itemsArray.map( (item, i) => <li className={ "app-list-item" + (item.done ? ' done' : '') }
                                                      key={"item" + i.toString()}
                                                      onClick={ this.handleClick.bind(this, i) }
                                                      >{item.txt}
                                                      <button onClick={this.handleDelete.bind(this, i)} >🗑️</button>
                                                      </li> );
        return (
            <ul className="app-list" >
                {list}
            </ul>
        );
    }
}

export default List;