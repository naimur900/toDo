# React Context Reducer To-Do App Demo

A simple to-do application built with React, demonstrating the power of Context and Reducer for state management.

## Features

- Add new tasks
- Toggle completion status of tasks
- Delete tasks
- Edit existing tasks

## Benefits of using React Context and Reducer:

### Simplified state management:

- Centralized state for all to-do items, eliminating prop drilling and improving component reusability.
- Clear separation of concerns: Reducer defines pure state transitions, while context provides access to state and dispatch functions.

### Improved performance:

- Memoization ensures components only re-render when their state or dependencies change.
- Reducer state updates are predictable and efficient.

### Enhanced testability:

- Reducer logic is isolated and easy to test independently.
- Context provides a clear entry point for testing child components that consume state.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Visit http://localhost:3000 in your browser.


