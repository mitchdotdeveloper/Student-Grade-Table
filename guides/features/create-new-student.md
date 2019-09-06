Instructions - Adding a New Student to the Server
--

### Overview

In this feature, You will add the functionality of being able to add a new student to the server and updating the DOM with the new student.

<details>
<summary>1. Where to Begin</summary>

  - The Following will be completed in your SGT template class.
    - Note, you will have to modify your `handleAdd` method for new functionality
      - It will be used to call the method you are about to create:
      - It will require other changes for the upgraded functionality related to server integration
        - These changes must be completed after you can add students successfully to the server
    - Declare a new method that will be used to add a new student to the server
    - It takes the following parameters
      - studentName
      - studentCourse
      - studentGrade
    - It will send the following data to the server
      - Your api key
      - The student's name
      - The student's course
      - The student's grade
    - It will return the following from the server
      - A boolean on whether the server request was successful
      - An array of errors if any errors occurred during the request
      - The new database generated ID of the student you added
    - In the add student method:
      - Use an AJAX call to the Learning Fuze SGT API to add a new student to the server:
      - Build this method as you did the previous method
        - API configuration object information:
            - datatype:
              - Takes the string "json"
            - URL: `http://s-apis.learningfuze.com/sgt/create`
            - method: post
            - data:
              - This key will contain the object you are sending to the server
                - The object will have four keys:
                  - `"api_key"`
                  - `name`
                  - `course`
                  - `grade`
                - Make sure to assign the proper data to the proper key
            - success:
              - Callback function that will run if your api call is successful
              - Remember that success comes in two types
                - You contact the server and get the data you were requesting
                - You contact the server, but there is an error of some kind that prevents you from receiving what you requested
                - Always check the server response so that you know whether or not your request was truly successful or if you simply made contact with the server
            - error:
              - Callback function that is called when there is an error contacting the server
      - Once you receive confirmation that the student has been added to the server
        - Perform the following in your success callback
          - Call your data retrieval method from the previous Feature Set
      - Once you are able to add a student to the server, retrieve all students from the server, and Update the DOM with the new student
        - Congratulations! You are ready to move on to the next feature set!





</details>





### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "completed adding student to server"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin add-student-to-server`

- Finally, you will want to create a pull request. This will merge the code from your newly **completed** feature branch into your `master` branch.

  1. Navigate to <kbd>New Pull Request</kbd>:
  ![Navigate to pull requests](../post-feature/navigate-to-pull-request.gif)
  2. Compare changes to merge:
  ![Compare changes to merge](../post-feature/compare-changes.gif)
  3. Create a new pull request:
  ![Create new pull request](../post-feature/create-pull-request.gif)
  4. Merge pull request:
  ![Merge pull request](../post-feature/merge-pull-request.gif)
  5. Update master with the new changes:
  ![Update master](../post-feature/pull-new-changes.gif)
  6. Go back to [Features](../../README.md#features), if you're still working through the project.
