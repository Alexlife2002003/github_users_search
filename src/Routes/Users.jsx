import React, { useEffect, useRef, useState } from 'react';
import UsersContainer from '../components/UsersContainer';
import Loading from '../components/Loading';
import LoadingSkeletonUsersContainer from '../components/LoadingSkeletonUsersContainer';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef('');
  let BaseUrl = 'https://api.github.com/users';

  async function Allusers() {
    if (user.current.value === '') {
      setLoading(true);
      const res = await fetch(BaseUrl);
      const data = await res.json();
      setUsers(data);
      setLoading(null);
    }
  }

  async function findUser() {
    setLoading(true);
    if (user.current.value !== '') {
      setUsers('');
      const res = await fetch(BaseUrl + '/' + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = '';
    } else {
      Allusers();
    }
    setLoading(null);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      findUser();
    }
  };

  useEffect(() => {
    Allusers();
  }, [setUsers]);

  return (
    <div>
      <div className='flex justify-center items-center h-11 my-5'>
        <input
          type='text'
          placeholder='Search github username ..'
          className='h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none'
          ref={user}
          onKeyDown={handleKeyPress}
        />
        <button onClick={findUser} className='bg-blue-900 font-semibold px-4 h-full'>
          Search
        </button>
      </div>

      {loading ? <LoadingSkeletonUsersContainer /> : <UsersContainer users={users} />}
    </div>
  );
};

export default Users;
