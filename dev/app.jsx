import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu.jsx";
import List from "./list.jsx";

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
            return {
                itemsList
            }
        })
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
            <div>
                <Menu addItem={ this.addItem.bind(this) } clearItemsList={ this.clearItemsList.bind(this) } />
                <List items={ this.getItems.bind(this) } toggleStatus={ this.toggleStatus.bind(this) } />
            </div>
        );
    }
};

ReactDOM.render( <App />, document.querySelector("#container") );