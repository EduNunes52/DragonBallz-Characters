import { Avatar } from 'primereact/avatar';
import { fetchCharacterList } from './service/CharacterService';
import { Characters } from './model/characters';
import { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Planet } from './model/planet';
import { fetchPlanetList } from './service/PlanetService';

function App() {

  //ENTRADA

  //criação das props = campos(inforamções que você irá receber do usuário)
  const [characters, setCharacters] = useState<Characters[]>([]);

  const [planet, setPlanet] = useState<Planet[]>([]);


  //PROCESSAMENTO

  const imageBodyTemplatev2 = (characters: Characters) => {
    return <Avatar image={characters.image} shape="circle" />
  };

  const imageBodyTemplatevP = (planet: Planet) => {
    return <Avatar image={planet.image} shape="circle" />
  };


  useEffect(() => {
    const getCharacter = async () => {
      const result = await fetchCharacterList();
      setCharacters(result);
    };
    getCharacter();

    
  }, []);

  

  const data = fetchCharacterList()
  console.log(data)


  useEffect(() => {
    const getPlanet = async () => {
      const result = await fetchPlanetList();
      setPlanet(result);
    };
    getPlanet();
  }, []);

  const dataP = fetchPlanetList()
  console.log(dataP)


  //SAIDA



  return (
    <>
      <DataTable value={characters} tableStyle={{ minWidth: '50rem' }}>
        <Column header="Image" body={imageBodyTemplatev2}></Column>
        <Column field="id" header="id"></Column>
        <Column field="name" header="name"></Column>
        <Column field="race" header="race"></Column>
        <Column field="gender" header="gender"></Column>
        <Column field="ki" header="ki"></Column>
        <Column field="maxKi" header="maxKi"></Column>
        <Column field="affiliation" header="affiliation"></Column>
      </DataTable>

      <DataTable value={planet} tableStyle={{ minWidth: '50rem' }}>
        <Column header="image" body={imageBodyTemplatevP}></Column>
        <Column field="id" header="id"></Column>
        <Column field="name" header="name"></Column>
        <Column field="isDestroyed" header="isDestroyed"></Column>
        <Column field="description" header="description"></Column>
      </DataTable>
      
    </>


  )
}

export default App
