
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';

function App() {
  const [text, settext] = useState('')
  const [showthala, setshowthala] = useState(false)
  const [showNotthala, setshowNotthala] = useState(false)
  
  const [reason, setreason] = useState('')

  function submittext() {
    setshowNotthala(false)
   let temp = text.toLowerCase()

    if (text === 7 || text === 'seven' || text.length === 7||temp==="mahi"||temp==="dhoni"||temp==="ipl"||temp==="champion") {

      if (text === 7) {
        setreason('7==7')
      }
      if (text.length === 7) {
        let resultString = text.split('').join('+');
        setreason(resultString + '==7')
      }else{
        setreason(text+'==7')
      }

      setshowthala(true)
    } else {
      if (!isNaN(text)) {
        
        let sum = text.split('').map(Number).reduce((acc, digit) => acc + digit, 0);
        if (sum === 7) {
          let resultString = text.split('').join('+');
          setreason(resultString + '==7')
          setshowthala(true)

        }else{
          let temp = sum-7
          let resultString = text.split('').join('+');
          if(temp<0){
            temp = -temp
            setreason(resultString +'+'+temp + '==7')
          }else{
            setreason(resultString +'-'+temp + '==7')
          }
          
          setshowthala(true)

        }

      } else {
        
        setshowNotthala(false)
        setshowNotthala(true)
      }

    }

  }

  function handletext(e) {

    settext(e.target.value)
    console.log("text===", text)
    if (text.length === 1) {
      setshowthala(false)
      setshowNotthala(false)
    }

  }


  return (

    <div className="App " >
      <div className='col-lg-4 mx-2' >
        <div className="card" style={{ boxShadow: '1px 2px 9px #6c757d', marginTop: '100px', marginBottom: '15px' }}>
          <div className='card-header'>
            <h6>Check If You are Thala or Not</h6>
          </div>

          <div className='card-body'>
            <input type='text' value={text} onChange={handletext} placeholder="Type Anything..."className='form-control' ></input>


          </div>
          <div className='card-footer'>
            <button className='btn btn-success ' onClick={submittext}>Submit</button>
          </div>

        </div>
      </div>

      {showthala && (
      <div className='col-lg-4 mx-2'>
        <div className="card" style={{ boxShadow: '1px 2px 9px #6c757d', marginTop: '100px', marginBottom: '15px' }}>
          <div className='card-header'>
            <h6>Thala For Reason</h6>
          </div>
          <div className='card-body'>
            <ReactPlayer
              url={process.env.PUBLIC_URL + '/thala.mp4'}
              width="100%"
              height="100%"
              controls={true}
            />
          

          </div>
          <div className='card-footer'>
            <h6>{reason}</h6>

          </div>

        </div>
      </div>
      )}
      
      
      {showNotthala && (
      <div className='col-lg-4 mx-2'>
        <div className="card" style={{ boxShadow: '1px 2px 9px #6c757d', marginTop: '100px', marginBottom: '15px' }}>
          <div className='card-header'>
            <h6>You Are Not Thala!</h6>
          </div>
          <div className='card-body'>
          <h6>Try With Other Input!</h6>
          

          </div>
          

          </div>
       

        </div>
     
      )}
      
      
     

     
    </div>
    
  );
}

export default App;
