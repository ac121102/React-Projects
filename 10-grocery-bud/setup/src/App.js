import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [editState, setEditState] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'Please enter an item', 'danger');
    } else if (name && editState) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setEditState(false);
      showAlert(true, 'Sucessfully edited item', 'success');
    } else {
      showAlert(true, 'Successfully Added Item', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'Empty List', 'danger');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'Item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditState(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form
        className='grocery-form'
        onSubmit={handleSubmit}
      >
        {alert.show && (
          <Alert
            {...alert}
            removeAlert={showAlert}
            list={list}
          />
        )}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. Eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type='submit'
            className='submit-btn'
          >
            {editState ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button
            className='clear-btn'
            onClick={clearList}
          >
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
