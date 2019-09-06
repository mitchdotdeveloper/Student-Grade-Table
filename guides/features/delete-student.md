Instructions - Deleting a Student from the Server
--

### Overview

In this feature, you will add the functionality needed to delete a student from the server and update the DOM with the deleted student removed

<details>
<summary>1. Where to begin </summary>

  - The following will be completed in you SGT template class
    - You will be renaming and repurposing your `deleteStudent` function so that it now deletes students from the server
    - Give a name appropiate to its new functionality
    - It will take a single parameter
      - studentID
    - It will send the following data to the server
      - Your api key
      - The student ID
    - It will return the following data from the server
      - A boolean on whether the server request was successful
      - An array of errors if any errors occurred during the request
    - In the new delete student from server method
      - Use an AJAX call to the Learning Fuze SGT API to delete a student from the server:
      - Build this method as you did the previous method
        - API configuration object information:
            - datatype:
              - Takes the string "json"
            - URL: `http://s-apis.learningfuze.com/sgt/delete`
            - method: post
            - data:
              - This key will contain the object you are sending to the server
                - The object will have two keys:
                  - `"api_key"`
                  - `student_id`
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
        - Perform the following in your success callback:
          - Call your data retrieval method
      - Once you are able to delete a student from the server, retrieve all students from the server, and Update the DOM without the deleted student
        - Congratulations! You are ready to move on to the next feature set!


</details>





### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "added delete student functionality"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin delete-student`

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
