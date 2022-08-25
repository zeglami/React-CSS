import './App.css';
import AboutMe from './components/AboutMe';
import ContactUs from './components/ContactUs';
import Flex from './components/Flex';
import MyWebsite from './components/MyWebsite';
import Services from './components/Services';

function App() {
  return (
  <div className='all'>
 <MyWebsite/>
<AboutMe/>
<Services/>
<Flex/>
<ContactUs/>
  </div>
  );
}

export default App;
