import FlightRoute from './modules/components/FlightRoute';
import Header from './modules/components/Header';
import PageHeading from './modules/components/PageHeading';


function App() {
  return (
    <div className="App">
      <Header />
      <PageHeading heading="Emirates Flight Routes From Dubai (DXB)"/>
      <FlightRoute/>
    </div>
  );
}

export default App;
