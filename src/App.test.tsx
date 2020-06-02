import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (props={}, state=null) => {
  return shallow<App>(<App { ...props} />);
};

interface Wrapper {
  find: (value: string) => any
}

const findByDataTestAttr = (wrapper: Wrapper, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByDataTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByDataTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByDataTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});



// test('renders learn react link', () => {
//   const wrapper = shallow(<App />);
//   // console.log(wrapper.debug());
//   expect(wrapper).toBeTruthy();
// });
