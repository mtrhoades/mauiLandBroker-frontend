import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SingleAssociation = ( { association }:any ) => {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const handleLogin = async () => {
        try {
          const response = await fetch('/associationslogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.status === 200) {
            const data = await response.json();
            // Store the token securely (e.g., in localStorage)
            // Redirect to a protected route, fetch data, and display it.
          } else {
            // Handle authentication error
          }
        } catch (error) {
          // Handle network errors
        }
      };    

    return (
      <div>
        {/* <!-- Button trigger modal for association login--> */}
        <button type="button" className="btn btn-primary" onClick={handleShow}><h3>{association.name}</h3></button>

        {/* <!-- Modal --> */}
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{association.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="userName"><b>User Name</b></label>
                    <input type="text" name="username" id="userName" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" required style={{border: "1px solid"}} />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="passWord"><b>Password</b></label>
                    <input type="password" name="password" id="passWord" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required style={{border: "1px solid"}} />
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary btn-block mb-4">Log in</button>
            </form>
            </Modal.Body>
        </Modal>

      </div>
    );
  };
  
  export default SingleAssociation;