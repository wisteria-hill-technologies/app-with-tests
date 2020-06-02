# Example app with tests and typescript
Just jest and enzyme test practice, following along a Udemy course, but also implements it with typescript.

### Make sure to have enzyme installed with create-react-app
If you are starting with scratch with create-react-app with typescript and enzyme, follow the below link.
```
https://thetrevorharmon.com/blog/configuring-jest-and-enzyme-in-create-react-app-on-typescript
```

### Test Behavior, not Implementation
- ideally, do not want to re-write tests after a refactor
- test behavior (what app should do) not implementation

### To remove data-test attributes from production
install as below
```
yarn add --dev babel-plugin-react-remove-properties
```
But, this will require ejecting the create react app.


Reference:
https://www.udemy.com/course/react-testing-with-jest-and-enzyme/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
