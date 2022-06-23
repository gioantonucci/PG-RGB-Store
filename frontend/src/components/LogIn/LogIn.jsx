import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../redux/actions';
import { useNavigate } from 'react-router';




export default function LogIn() {
let navigate = useNavigate()
const [userName, setUsername] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()
// const verifyUser = useSelector(state => state.verifyUser) // {} -> {usernameCargado}

 /*  {
          login:true
          lastname:
          image:
          username:
          mail:
          celphone:
          name:
      } */


const handleLoginSubmit = async(e) => {
  e.preventDefault();
  console.log("This is submit");
  // dispatch(verify(userName, password));
  // console.log(verifyUser);
  let userLogin = {username: userName, password: password}
  const user = await axios({
    method: "post",
    url: "http://localhost:3001/login",
    data: userLogin,
    headers: { "X-Requested-With": "XMLHttpRequest" },
    withCredentials: true,
  })
  .then((data) => data.data)
  .catch(e => console.log(e))
  let {login, lastname, image, username, email, cellphone, name} = user;
  localStorage.setItem("username", username);
  localStorage.setItem("name", name);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("login", login);
  localStorage.setItem("email", email);
  if(login == true){
    setUsername("");
    setPassword("");
    navigate("/home");
  }
}

return (
      <div className=' flex flex-col items-center justify-center min-h-screen '>
        <form className=' w-1/3 h-96  border-white border-2 gap-6 rounded-md flex flex-col justify-center items-center
        sm:w-80 sm:h-80  ' onSubmit={(e) => handleLoginSubmit(e)}>
          <div>
          <img className='w-16' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" alt="avatar" />
          </div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <input className='border-2 border-primary-400 rounded max-w-max  '
            type='text'
            value={userName}
            name='Username'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            />
            <input  className='border-2 border-primary-400 rounded max-w-max  '
            type='password' 
            value={password}
            name='Password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='hover:bg-primary-400 rounded-xl w-24 text-xl items-center' >
            Login
          </button>
        </form>
      </div>
    )
}


