import React from 'react'
import { useGlobalContext } from '../context/UsersContext'
import Loading from './Loading'
import Paginate from './Paginate'
import User from './User'


const Users = () => {

    const {CurrentUserIndex,loading} = useGlobalContext()
    return (
        <div>
          {loading &&(
            <Loading/>
          )}
            <div className='user__container'>
            {CurrentUserIndex.map((user)=>{
            return (
           <User user={user}/>
            )
        })}
            </div>

    
  <Paginate/>
    </div>
  )
}

export default Users