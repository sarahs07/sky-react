import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  onToggleClick: f => f,
  onRemoveClick: f => f

};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should have removed and toggle buttons for each task', () => {
    const items = [{ id: 1, content: 'Test 1'}, { id: 2, content: 'Test 2'}, { id: 3, content: 'Test 3'}];
    const onToggleClickMock = jest.fn();
    const onRemoveClickMock = jest.fn();
    const renderedItem = shallow(
      <ItemsList {...defaultProps} items={items}/>
    );
    expect(renderedItem.find('.removeBtn')).toHaveLength(3);
    expect(renderedItem.find('.toggleBtn')).toHaveLength(3);
  });

  it('should have correct number of removed and toggle buttons', () => {
    const items = [{ id: 1, content: 'Test 1'}];
    const onToggleClickMock = jest.fn();
    const onRemoveClickMock = jest.fn();
    const renderedItem = shallow(
      <ItemsList {...defaultProps} items={items}/>
    );
    expect(renderedItem.find('.removeBtn')).toHaveLength(1);
    expect(renderedItem.find('.toggleBtn')).toHaveLength(1);
  });

  it('should call onToggleClick on clicking the toggle button', () => {
    const items = [{ id: 1, content: 'Test 1'}];    
    const onToggleClickMock = jest.fn();
    const renderedItem = mount(
      <ItemsList {...defaultProps} items={items} />
    );
    renderedItem.find('#toggleBtn1').simulate('click');
    expect(onToggleClickMock.mock.calls.length).toBe(1);
  });

  it('should call onRemoveClick on clicking the toggle button', () => {
    const items = [{ id: 1, content: 'Test 1'}];    
    const onRemoveClickMock = jest.fn();
    const renderedItem = mount(
      <ItemsList {...defaultProps} items={items} />
    );
    renderedItem.find('#removeBtn1').simulate('click');
    expect(onRemoveClickMock.mock.calls.length).toBe(1);
  });
});
