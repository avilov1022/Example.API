import './App.css';
import userRepository, { useGetAll, useGetById } from './api/user';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


const App = () =>{
  const {users, getUsers, isLoading} = useGetAll()
  const user = useGetById()

  return(
    // <div className='App'>
    //   <button disabled={isLoading} onClick={getUsers}>{isLoading ? "Loading..." : "Показать всех"}</button>

    //   <button disabled={user.isLoading} onClick={() => user.getUser(1)}>{user.isLoading ? "Loading..." : "Показать одного"}</button>
    //   <div>
    //     {user && user.user.name}
    //   </div>
      

    //   <ul>
    //     {users.length > 0 && users.map((user) => <li>Name: {user.name} <br/> Email: {user.email}</li>)}
    //   </ul>
    // </div>
    <div>
      <Header/>
      <Main/>
      <footer className="footer">footer</footer>
    </div>
  )
}

export default App;