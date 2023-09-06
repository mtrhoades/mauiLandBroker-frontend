import { useState, useEffect } from 'react';

const SearchResults = () => {

    const [listings, setListings]: any[] = useState([]);
    
    const url = 'https://zillow56.p.rapidapi.com/search?location=96793';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '36b9de386bmsh83631e05836c7bbp1265c4jsne4baecaf36d0',
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      }
    };    
  
  
    // fetch request for mls api
    const mlsFetch = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        setListings(result)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      mlsFetch();
    }, [])
    

  return (
    <div className="searchResultsContainer">
        SearchResults

        {/* {listings.map(listing => (

        ))} */}

    </div>
  )
}

export default SearchResults;