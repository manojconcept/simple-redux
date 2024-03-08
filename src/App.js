import React from "react";
import { connect } from 'react-redux'
import { updateName, updateAge, saveData } from "./Store/Actions/formAction";

const App = ({name,age,updateAge,updateName,saveData,data}) => {
	const nameField = (e) => {
		updateName(e.target.value);
	}

	const ageField = (e) => {
		updateAge(e.target.value);
	}

	const saveButton = () => {
		const newData = {
			name: name,
			age: age
		}
		saveData(newData)
	}
	console.log(data)
	return (
		<>
			<input
				name="name"
				type="text"
				placeholder="type your name"
				onChange={(e) => { nameField(e) }}
			/>
			<input
				name="age"
				type="number"
				placeholder="type your age"
				onChange={(e) => { ageField(e) }}
			/>
			<input onClick={saveButton} type="button" />

		</>
	)
}

const mapStateToProps = (state) => ({
	name: state.myReducer.name,
	age: state.myReducer.age,
	data: state.myReducer.data,
})

const mapDispatchToProps = {
	saveData,
	updateName,
	updateAge,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)