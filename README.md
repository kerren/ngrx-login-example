# NGRX Login Example

This project outlines the use of `ngrx` in a standard Angular application.

I avoid using effects in this project because I think we often use them when we shouldn't. The logic for logging in is still done in a service, the result is not returned by the service, instead, it's returned using the `ngrx dispatch(...)` function.

There is plenty of room for improvement so feel free to submit issues and comments on the code.

## Getting Started

In order to start this project, just run `npm start`.

## Conventions

To make things easy to pick up in your IDE, I've tried to create a naming convention. I create a folder called `store` in each feature module. The `AppState` holds the entire state of the application and each feature is added to that state.

In the `store` folder you'll find 5 files,

- `feature.state.ts`
- `feature.selectors.ts`
- `feature.reducers.ts`
- `feature.actions.ts`
- `index.ts`

The `index.ts` file just exports everything from the other files to make it easy to `import` them into `components` and `services`.

As mentioned previously, services still perform all of the logic and processing, they just dispatch the result using the store instead of returning them directly from the service.
