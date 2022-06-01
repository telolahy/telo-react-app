import React from 'react';
import Bouton from './Bouton';
import Input from './Input';
function App() {
  return (
    <React.Fragment>
       
       <Input name='nom'>Nom</Input>
       <Input name='prenom'>Prenom</Input>
       <Bouton className="btn btn-blue" >valider</Bouton>
    </React.Fragment>
  );
}

export default App;
