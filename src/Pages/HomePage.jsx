import React,{useState} from 'react';
import {v4} from 'uuid';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

function HomePage() {
  const [roomId,setRoomId] = useState('');
  const [username,setUsername] = useState('');
  const navigate = useNavigate();

  const CreateRoomId = () => {
    let id = v4();
    setRoomId(id);
    toast.success('Room Id Created');
  }

  const JointButtonClick = () => {
    if(!roomId || !username){
      toast.error('Enter Room Id and Username');
      return;
    }

      navigate(`/editor/${roomId}`,{state:{username}});
  

  }
  
  
  return (<>
    <div className='homepage'>
      <div className="form">
        <img src="logo.png" className='homepagelogo' alt="CodeCollab Icon" />
        <h4 className='heading'>Enter/Create Room Details</h4>
        <div className="inputgroup">
          <input type="text" className='inputfield' placeholder='ROOM ID' onChange={(e)=>setRoomId(e.target.value)} value={roomId}/>
          <input type="text" className='inputfield'  placeholder='USERNAME' onChange={(e)=>setUsername(e.target.value)}/>
          <button className='btn joinbtn'onClick={JointButtonClick}>Join Now</button>
          <span className='createidtxt'>
            If you don't have a room id,&nbsp; 
            <a onClick={CreateRoomId} className='createidlink'>Create One</a> 
          </span>
        </div>
      </div>

    <footer>
    <h4> Build with 💛 by &nbsp; <a href="">Pankaj Rai</a></h4>
    </footer>
    </div>
    </> 
  )
}

export default HomePage