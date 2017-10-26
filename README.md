I approached the task by thinking of what changes are required in the UI first to implement the features.

After getting the UI elements in place, I created the constants, actions and properties in the list component required to dispatch the correct payload to the store and then implemented the required state updates in the reducer.

After checking the remove and toggle features are working, I wrote few unit tests to make sure that the buttons for toggling of task status
and removal of task exist and also that they get called on clicking the buttons. 

Time allowing I would have liked to add the a reducer for implementing the state to keep the filter option and also update the todo items state as per the selection.
I would have also looked into fixing the last two unit tests and more unit tests for reducer and new actions creator methods.

My previous experience with state management in React is using the Flux architecture but I have implemented store with reducers updating the state in Angular 2.