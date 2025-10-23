import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './store/userSlice';
import { selectUsers, selectLoading, selectError } from './store/userSelectors';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleFetchUsers = () => {
    // Dispatch action with payload
    dispatch(fetchUsersRequest({ limit: 10 }));
  };

  useEffect(() => {
    // Fetch users on component mount
    handleFetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Toolkit + Redux Saga Demo</h1>
        
        <button onClick={handleFetchUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Users'}
        </button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          {loading && <p>Loading users...</p>}
          
          {!loading && users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;