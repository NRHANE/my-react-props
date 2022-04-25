import './App.css';
import Profile from './Profile/Profile';

function App() {
  const user={fullName:'Nourhen Ltaief'  ,
              bio:'Full stack web development,  technologies,  I am a fast learner and always love to develop myself ',
            
              profession:'Developer ,Full-stack js'};
  const handleName=(user)=>{alert(`Your Name's : ${user.fullName}`)};


  return (
          <div className='App'>
            <h1>Profile User</h1>
            <Profile user={user} handleName={handleName}>
              <img src='/assets/avatarWomenUser.jpg' alt='AvatarWomenUserImage' className='avatar'/>
              </Profile>
              </div>
  );
}
              
            

export default App;