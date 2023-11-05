import React, {useState, useEffect} from 'react';
import AssociationFiles from './AssociationFiles';

// Define interfaces to match your MongoDB schema    
interface Association {
    _id: string,
    name: string;
    directory: string;
    username: string;
    password: string;
    filecategories: Array<{
      categoryname: string;
      files: Array<{
        filename: string;
        size: string;
        filepath: string;
      }>;
    }>;
  }

const AssociationsList = () => {

    const [associations, setAssociations] = useState<Association[]>([]);
    const [selectedAssociation, setSelectedAssociation] = useState<Association | null>(null);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // fetching data for ALL associations
    const getAssociations = async () => {
        try {
            const response = await fetch('http://localhost:3001/associationslist');
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
                }
            const data = await response.json();
            // console.log(data);
            
            // Extract the 'associations' array from the response data
            const associationsArray = data.associations;

            // console.log(associationsArray);
            setAssociations(associationsArray);

        } catch (error) {
            console.log("fetch request error!", error)
        }
    };

    // useEffect section
    useEffect(() => {
        getAssociations();
    }, []);
    

    const showLogin = (association: Association) => {
        setSelectedAssociation(association);
        console.log(association);
        setAssociations([]);
    };

    const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleLoginFormSubmit = async () => {
        if (selectedAssociation) {
            try {
                const response = await fetch('http://localhost:3001/associationslogins', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: loginForm.username,
                        password: loginForm.password,
                        associationId: selectedAssociation._id,
                    }),
                });
                if (response.ok) {
                    // Authentication successful, you can proceed with showing the association's data.
                    console.log('Login Successful!!!');
                    setErrorMessage('');
                    // You might want to redirect the user to a different page or render the association's data here.
                    const data = await response.json();
                    setLoggedIn(true);
                    return <AssociationFiles association={data.association} onLogout={handleLogout} />
                } else {
                    // Authentication failed
                    // Handle the error or display a message to the user.
                    setErrorMessage("Invalid Credentials, Please Try Again!");
                }
            } catch (error) {
                console.log("login request error!", error);
            }
        }
    };

    const handleLogout = () => {
        // Add the logout logic here, such as clearing user sessions and state
        // and potentially redirecting the user to the login page.
        // For now, let's simply clear the selectedAssociation and setLoggedIn to false.
        setSelectedAssociation(null);
        setLoggedIn(false);
        getAssociations();
      };
        
  return (
    <div style={{margin: '12rem 0rem 5rem 0rem', textAlign: 'center'}}>
        <h1>Associations</h1>
        <ul style={{paddingTop: '2rem'}}>
            {associations.map((association) => (
            <li 
                style={{listStyleType: 'none', paddingBottom: '1rem', fontSize: '1.5em'}}
                key={association._id}
            >
                <button onClick={()=> showLogin(association)}>{association.name}</button>
            </li>
            ))}
        </ul>
        {selectedAssociation && (
                <div>
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                    {loggedIn ? (
                        <AssociationFiles association={selectedAssociation} onLogout={handleLogout} />
                        ):(
                            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <h2>Login to {selectedAssociation.name}</h2>
                            <label htmlFor="username"><b>User Name:</b></label>
                            <input
                                style={{textAlign: 'center', height: '2rem', border: '1px solid black'}}
                                type="text"
                                name="username"
                                value={loginForm.username}
                                onChange={handleLoginFormChange}
                            />
                            <label htmlFor="password"><b>Password:</b></label>
                            <input
                                style={{textAlign: 'center', height: '2rem', border: '1px solid black'}}
                                type="password"
                                name="password"
                                value={loginForm.password}
                                onChange={handleLoginFormChange}
                            />
                            <button className="btn btn-primary" type="button" onClick={handleLoginFormSubmit}>
                                Login
                            </button>
                        </form>
                    )}
                </div>
            )}
    </div>
  )
}

export default AssociationsList;