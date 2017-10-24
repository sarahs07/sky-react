import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleItemStatus } from '../../logic/actions';
import { removeItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onToggleClick, onRemoveClick }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}> 
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => <li key={item.id} className={(item.completed === true) ? 'background-grey' : ''}> 
           {item.content} &nbsp; {item.completed}
           <button onClick={() => onToggleClick(item.id)} className={'toggleBtn'} id={'toggleBtn'+item.id}>
              {(item.completed === true) ? 'Mark as uncomplete' : 'Mark as complete'}
          </button> &nbsp;
          <button onClick={() => onRemoveClick(item.id)} className={'removeBtn'} id={'removeBtn'+item.id}>
            Remove Task
          </button>
          </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveClick: itemID => dispatch(removeItem(itemID)),
    onToggleClick: itemID => dispatch(toggleItemStatus(itemID)),
  };
  };

const mapStateToProps = state => {
  return { items: state.todos.items };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
