class SGT_template {
	/* constructor - sets up SGT object and storage of students
	params: (object) elementConfig - all pre-made dom elements used by the app
	purpose:
		- stores the appropriate DOM elements inside of an object
		and uses those element references for later portions of the application
		- Also, stores all created student objects in this.data
		- Finally, binds methods that need to be bound
	return: undefined
	*/
	constructor(elementConfig) {
		this.elementConfig = elementConfig; /* console.log elementConfig to note what data you have access to */
		this.data = {};


	}

	/* addEventHandlers - add event handlers to pre-made dom elements
	make sure to use the element references that were passed into the constructor (see elementConfig)
	purpose:
		adds click handlers to add and cancel buttons using the dom elements passed into constructor
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	addEventHandlers() {


	}

	/* clearInputs - Clear the values in the three form inputs
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	clearInputs() {

	}

	/* handleCancel - function to handle the cancel button press (should clear out all values in the inputs)
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	handleCancel() {

	}

	/* createStudent - take in data for a student, make a new Student object, and add it to this.data object
		name : the student's name
		course : the student's course
		grade: the student's grade
		id: the id of the student
	purpose:
			If no id is present, it must pick the next available id that can be used in the this.data object
			{Object.keys is helpful for this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
			If the id of the student to be created already exists, the method should return false
				- {You should use the "doesStudentExist" method below to see if the student id exists}
			Once you have all the necessary data, including an ID, name, course, and grade, create the new student.
			*** You MUST pass the id, name, course, grade, and a reference to SGT's deleteStudent method to properly create a student! ***
			Finally, store the student in the this.data object at a key that matches the students id
	params:
		name : the student's name
		course : the student's course
		grade: the student's grade
		id: the id of the student
	return: false if unsuccessful in adding student, true if successful
	ESTIMATED TIME: 1.5 hours
	*/
	createStudent() {

	}

	/* doesStudentExist -
		determines if a student exists by ID.  returns true if yes, false if no
	purpose:
			check if passed in ID is a value, if it exists in this.data, and return the presence of the student
	params:
		id: (number) the id of the student to search for
	return: false if id is undefined or that student doesn't exist, true if the student does exist
	ESTIMATED TIME: 15 minutes
	*/
	doesStudentExist() {

	}

	/* handleAdd - function to handle the add button click
	purpose:
		- grabs values from inputs,
		- utilizes the createStudent method to create the	student,
		- stores the created student in this.data at the appropiate key,
		- then clears the inputs and displays all students
	params: none
	return: undefined
	ESTIMATED TIME: 1 hour
	*/
	handleAdd() {

	}

	/* readStudent -
		get the data for one or all students
	purpose:
			- determines if ID is given or not
				- if ID is given, return the student by that ID, if present
				- if ID is not given, return all students in an array
	params:
		id: (number)(optional) the id of the student to search for, if any
	return:
		a singular Student object if an ID was given, an array of Student objects if no ID was given
		ESTIMATED TIME: 45 minutes
	*/
	readStudent() {

	}

	/* displayAllStudents - iterate through all students in the this.data object
	purpose:
		- grab all students from this.data,
		- empty out every student in the dom's display area,
		- iterate through the retrieved list,
		- then render every student's dom element
		- then append every student to the dom's display area
		- then display the grade average
	params: none
	return: undefined
	ESTIMATED TIME: 1.5 hours
	*/
	displayAllStudents() {

	}

	/* displayAverage - get the grade average and display it
	purpose:
		- determine the average grade from students in this.data,
		- and shows it on the dom
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/

	displayAverage() {

	}

	/* deleteStudent -
		delete the given student at the given id
	purpose:
			- determine if the ID exists in this.data
			- remove it from the object
			- return true if successful, false if not
			(this is often called by the student's delete button through the Student handleDelete)
	params:
		id: (number) the id of the student to delete
	return:
		true if it was successful, false if not
		ESTIMATED TIME: 30 minutes
	*/
	deleteStudent() {

	}

	/* updateStudent -
		*** not used for now.  Will be used later ***
		pass in an ID, a field to change, and a value to change the field to
	purpose:
		- finds the necessary student by the given id
		- finds the given field in the student (name, course, grade)
		- changes the value of the student to the given value
		for example updateStudent(2, 'name','joe') would change the name of student 2 to "joe"
	params:
		id: (number) the id of the student to change in this.data
		field: (string) the field to change in the student
		value: (multi) the value to change the field to
	return:
		true if it updated, false if it did not
		ESTIMATED TIME: no needed for first versions: 30 minutes
	*/
	updateStudent() {

	}
}
