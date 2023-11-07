import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

interface Association {
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

interface AssociationFilesProps {
association: Association;
onLogout: () => void; // Define a callback function to handle the logout action
}

const AssociationFiles: React.FC<AssociationFilesProps> = ( {association, onLogout} ) => {

    const handleLogout = () => {
        // Call the onLogout callback function to perform the logout action
        onLogout();
      };

    
  return (
    <div>
      <h1>{association.name} Files</h1>
      <Link to="/associations">
        <button onClick={handleLogout} className="btn btn-danger">Logout</button> {/* Add a logout button */}
      </Link>
      <h2>File Categories:</h2>
      <ul>
        {association.filecategories.map((category, index) => (
          <li style={{listStyleType: 'none'}} key={index}>
            <strong><h3>{category.categoryname}</h3></strong>
            <ul>
              {category.files.map((file, fileIndex) => (
                <li style={{listStyleType: 'none'}} key={fileIndex}>
                  <a target="_blank" href={`http://localhost:3001/${file.filepath}`}><h4>{file.filename}</h4></a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AssociationFiles;