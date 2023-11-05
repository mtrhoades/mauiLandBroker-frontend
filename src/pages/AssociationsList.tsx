import React, {useState, useEffect} from 'react';
import SingleAssociation from './SingleAssociation';

// Define interfaces to match your MongoDB schema    
interface Association {
    name: string;
    _id: string;
}

const AssociationsList = () => {

    const [associations, setAssociations] = useState<Association[]>([]);

    // fetching data for ALL associations
    const getAssociations = async () => {
        try {
            const response = await fetch('http://localhost:3001/associationslist');
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
              }
            const data = await response.json();
            console.log(data);
            
            // Extract the 'associations' array from the response data
            const associationsArray = data.associations;

            console.log(associationsArray);
            setAssociations(associationsArray);

        } catch (error) {
            console.log("fetch request error!", error)
        }
    };


    // useEffect section
    useEffect(() => {
        getAssociations();
    }, []);

        
  return (
    <div style={{margin: '12rem 0rem 5rem 0rem', textAlign: 'center'}}>
        <h1>Associations List</h1>
        <ul style={{paddingTop: '2rem'}}>
            {associations.map((association) => (
            <li 
                style={{listStyleType: 'none', paddingBottom: '1rem', fontSize: '1.5em'}}
                key={association._id}
            >
                <SingleAssociation association={association}/>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default AssociationsList;