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
	constructor (elementConfig) {
		this.elementConfig = elementConfig;
		this.data = {};

    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
    this.retrieveStudent = this.retrieveStudent.bind(this);
	}

	/* addEventHandlers - add event handlers to pre-made dom elements
	make sure to use the element references that were passed into the constructor (see elementConfig)
	purpose:
		adds click handlers to add and cancel buttons using the dom elements passed into constructor
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	addEventHandlers () {
    this.elementConfig.addButton.on('click', this.handleAdd);
    this.elementConfig.cancelButton.on('click', this.handleCancel);
    $('#retrieveButton').on('click', this.retrieveStudent);
	}

	/* clearInputs - Clear the values in the three form inputs
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	clearInputs() {
    this.elementConfig.nameInput.val('');
    this.elementConfig.courseInput.val('');
    this.elementConfig.gradeInput.val('');
	}

	/* handleCancel - function to handle the cancel button press (should clear out all values in the inputs)
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/
	handleCancel() {
    this.clearInputs();
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
	createStudent (name, course, grade, id) {
    if (this.doesStudentExist(id)) {
      return false;
    }

    if (id < 0 || !id) {
      var idKeys = Object.keys(this.data);
      for (var index = 0; index < idKeys.length; ++index) {
        if (parseInt(idKeys[index])+1 !== parseInt(idKeys[index+1])) {
          id = parseInt(idKeys[index])+1;
          break;
        }
      }
    }

    this.data[id] = new Student(id, name, course, grade, this.removeStudent);
    return true;
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
	doesStudentExist (id) {
    return this.data.hasOwnProperty(id);
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
    if (this.elementConfig.nameInput.val().length < 2 ||
      this.elementConfig.courseInput.val().length < 2 ||
      isNaN(parseInt(this.elementConfig.gradeInput.val()))) {
      return;
    }

    this.addStudentToServer(this.elementConfig.nameInput.val(),
                            this.elementConfig.courseInput.val(),
                            parseInt(this.elementConfig.gradeInput.val()));

    this.clearInputs();
  }

  addStudentToServer(name, course, grade) {
    var localThis = this;

    var ajaxConfigObject = {
      dataType: 'JSON',
      url: 'api/addstudent.php',
      method: 'POST',
      data: {
        api_key: '9N6jd2RHMSkr',
        name: name,
        course: course,
        grade: grade
      },
      success: function (response) {
        localThis.createStudent(name, course, grade, response.new_id);
        localThis.retrieveStudent();
      },
      error: function (response) {
        console.error(response);
      }
    };

    $.ajax(ajaxConfigObject);
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
	readStudent (id) {
    if (arguments.length === 0) {
      return Object.values(this.data);
    } else if (this.data.hasOwnProperty(id)) {
      return this.data[id];
    }
    return false;
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
	displayAllStudents () {
    this.elementConfig.displayArea.empty();
    for (var student in this.data) {
      var studentElement = this.data[student].render();
      this.elementConfig.displayArea.append(studentElement);
    }
    this.displayAverage();
	}

	/* displayAverage - get the grade average and display it
	purpose:
		- determine the average grade from students in this.data,
		- and shows it on the dom
	params: none
	return: undefined
	ESTIMATED TIME: 15 minutes
	*/

	displayAverage () {
    var average = null;
    var students = null;
    for (var student in this.data) {
      average += this.data[student].data.grade;
      ++students;
    }
    average /= students;

    this.elementConfig.averageArea.text(average.toFixed(2));
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
	removeStudent (id) {
    if (this.doesStudentExist(id)) {
      delete this.data[id];
    }

    var localThis = this;
    var ajaxConfigObject = {
      dataType: 'JSON',
      url: 'api/deletestudent.php',
      method: 'POST',
      data: {
        api_key: '9N6jd2RHMSkr',
        student_id: id
      },
      success: function (response) {
        localThis.retrieveStudent();
      },
      error: function (response) {
        console.error(response);
      }
    };

    $.ajax(ajaxConfigObject);

	}

	/* updateStudent -
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
	updateStudent (id, field, value) {
    if (this.doesStudentExist(id)) {
      this.data[id].update(field, value);
      return true;
    }
    return false;
	}

  /* retrieveStudent -
    retrieve the student data from the server
  purpose:
  - send the API key to the server
  params: none
  return:
    An object literal containing:
      - A boolean on whether the server request was successful
      - The student data if the request was successful
  */
  retrieveStudent () {
    var localThis = this;
    var ajaxConfigObject = {
      dataType: 'JSON',
      url: 'api/getgrades.php',
      method: 'POST',
      data: {
        api_key: '9N6jd2RHMSkr'
      },
      success: function (response) {
        var studentCount = 0;
        while (studentCount < response.data.length) {
          var student = response.data[studentCount];
          localThis.createStudent(student.name, student.course, student.grade, student.id);
          ++studentCount;
        }
        localThis.displayAllStudents();
      },
      error : function (response) {
        console.error(response);
      }
    };

    $.ajax(ajaxConfigObject);
  }
}
