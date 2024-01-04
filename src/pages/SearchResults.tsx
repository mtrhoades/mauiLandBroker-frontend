import {useState, useEffect} from 'react';

const SearchResults = () => {

  // fetch request for mls data
  // const getMlsdata = async () => {
  //   try {
  //     const response = await fetch('https://users.mciserver.com/v1/js/loaderPublic.js',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  //         }
  //       }
  //     );
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //   } catch (e: any) {
  //     console.error(e.message);
  //   }
  // }

  // useEffect(() => {
  //   getMlsdata()
  // }, [])

  return (
    <div className="searchResultsContainer">
      <h1>Search Results</h1>

      <div className="mci-app-node mci-idx-node mci-idx-node-quickSearch" data-mod="quickSearch" data-property_types="Residential,Condominium,Vacant Land" data-mls_box="true" data-district_list="true" data-price_range="true" data-bed_bath="true">
        
        <div style={{textAlign: "center"}}>Loading...</div>
        
      </div>


      {/* <div className="mci-app-node mci-idx-node mci-idx-node-search" data-mod="search" data-display="featured">
        <div style={{textAlign: "center"}}>Loading...</div>
      </div> */}

    </div>
  )
}

export default SearchResults;