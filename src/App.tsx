import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './layouts/NavigationBar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Associations from './pages/Associations';
import Agents from './pages/Agents';
import Specials from './pages/Specials';
import About from './pages/About';
import BuySell from './pages/BuySell';
import RentWithUs from './pages/RentWithUs';
import MortgageCalculator from './pages/MortgageCalculator';
import HoaInfo from './pages/HoaInfo';
import SearchResults from './pages/SearchResults';

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='agents' element={<Agents />} />
            <Route path='associations' element={<Associations />} />
            <Route path='listings' element={<Listings />} />
            <Route path='specials' element={<Specials />} />
            <Route path='buysell' element={<BuySell />} />
            <Route path='rentwithus' element={<RentWithUs />} />
            <Route path='mortgagecalculator' element={<MortgageCalculator />} />
            <Route path='hoainfo' element={<HoaInfo />} />
            <Route path='searchresults' element={<SearchResults />} />
          </Routes>
      <Footer />

    </>
  );
}

export default App;
