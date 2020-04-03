import React, { Component } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

uuidv4();

class App extends Component {
	state = {
		items: [
			{ id: 1, title: "Wake Up" },
			{ id: 1, title: "Learn Piano" },
			{ id: 1, title: "Go shopping" },
			{ id: 1, title: "Make Breakfast" }
		],
		id: uuidv4(),
		item: "",
		editItem: false
	};
	// methods
	handlehange = e => {
		console.log("handle change");
	};
	handleSubmit = e => {
		console.log("handle submit");
	};
	clearList = e => {
		console.log("clear list");
	};
	handleDelete = id => {
		console.log(`handle delete ${id}`);
	};
	handleEdit = id => {
		console.log(`handle edit ${id}`);
	};

	render() {
		console.log(this.state);
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto col-md-8 mt-5'>
						<h3 className='text-capitalize text-center'>todo input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.handleEdit}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
