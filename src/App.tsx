
import Button from './Components/Button.tsx';
import './App.css'
import NavBar from './Components/NavBar.tsx';
import Card from './Components/Card.tsx';
import GrowImage from './Components/Image.tsx';

function App(){
  return(
  <div>
      <GrowImage />
      <section className="flex justify-start p-10">
        <NavBar />
      </section>
      <div className="flex justify-center pb-10">
      <Button />
      </div>
      <div className="flex justify-center flex-row flex-3 gap-4">
      <Card />
       <Card />
        <Card />
      </div>
      </div>
  )
}

export default App;  

