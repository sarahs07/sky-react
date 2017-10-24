I approached the task by thinking of what changes are required in the UI first to implement the features.

After getting the UI elements in place, I created the constants, actions and properties in the list component required to dispatch the correct payload to the store and then implemented the required state updates in the reducer.

After checking the remove and toggle features are working, I wrote few unit tests to make sure that the buttons for toggling of task status
and removal of task exist and also that they get called on clicking the buttons. 

My previous experience with React state management is using the Flux architecture but I have implemented store with state updating Reducers in an Angular 2 application.

Time allowing I would have liked to add the a reducer for implementing the state to keep the filter option and also update the todo items state as per the selection.
I would have also looked into fixing the last two unit tests as to why the calls to the click handler functions are getting recorded 
and coming as 0 and not as expect i.e.1 
