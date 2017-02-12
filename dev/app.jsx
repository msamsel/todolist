import React from "react";
import ReactDOM from "react-dom";
import Menu from "./app/menu.jsx";
import List from "./app/list.jsx";

class App extends React.Component {
    constructor() {
        super();
        const itemsList = this.readItemsList('items') || []
        this.state = { itemsList };
    }

    getItems() {
        // return Array with items
        return this.state.itemsList;
    }

    addItem(item) {
        // add new item to list
        this.setState( (prevState, props) => {
            let itemsList = prevState.itemsList;
            itemsList.push({"txt": item, done: false});
            return { itemsList }
        })
    }
    deleteItem(i) {
        if (i > this.state.itemsList.length-1) {
            return;
        } else {
            this.setState(
                (prevState, props) => {
                    let itemsList = prevState.itemsList;
                    itemsList.splice(i, 1);
                    return { itemsList }
                }
            )
        }

    }

    clearItemsList() {
        // clear entire list
        this.setState({ itemsList:[] });
    }

    readItemsList(key) {

        if (!window.localStorage) {
            return
        } else {
            const list = JSON.parse(window.localStorage.getItem( key ));
            return Array.isArray(list) ? list : [];
        }
    }

    writeItemsList(key, itemsList){
        window.localStorage.setItem(key, JSON.stringify(itemsList));
        return true;
    }

    toggleStatus(i) {
        let newItemsList = this.state.itemsList;
        newItemsList[i].done = !newItemsList[i].done;
        this.setState(newItemsList);
    }

    componentDidUpdate() {
        this.writeItemsList('items', this.state.itemsList)
    }

    render() {
        return (
            <div className="app" >
                <h1 className="app-title" >To Do List</h1>
                <Menu addItem={ this.addItem.bind(this) } clearItemsList={ this.clearItemsList.bind(this) } />
                <List items={ this.getItems.bind(this) } toggleStatus={ this.toggleStatus.bind(this) } deleteItem={ this.deleteItem.bind(this) } />
            </div>
        );
    }
};

ReactDOM.render( <App />, document.querySelector("#container") );