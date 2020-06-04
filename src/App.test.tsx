import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (props: any = null, state: any = null) => {
  const wrapper = shallow<App>(<App { ...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
};

interface Wrapper {
  find: (value: string) => any
}

const findByDataTestAttr = (wrapper: Wrapper, name: string) => {
  return wrapper.find(`[data-test='${name}']`);
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
  const wrapper = setup();
  const initialCounterState: number = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find increment button and click
  const button = findByDataTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and check value
  const counterDisplay = findByDataTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain('8');
});

test('clicking button decrements counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find decrement button and click
  const button = findByDataTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // find display and check value
  const counterDisplay = findByDataTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain('6');
});

test("counter can't go below zero", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  // find decrement button and click
  const decrementBtn = findByDataTestAttr(wrapper, 'decrement-button');
  decrementBtn.simulate('click');

  const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain('0');

  const message = findByDataTestAttr(wrapper, 'message');
  expect(message.length).toBe(1);

  const incrementBtn = findByDataTestAttr(wrapper, 'increment-button');
  incrementBtn.simulate('click');
  const newMessage = findByDataTestAttr(wrapper, 'message');
  expect(newMessage.length).toBe(0);
});



// test('renders learn react link', () => {
//   const wrapper = shallow(<App />);
//   // console.log(wrapper.debug());
//   expect(wrapper).toBeTruthy();
// });
