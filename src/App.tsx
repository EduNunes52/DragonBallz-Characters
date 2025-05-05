import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { fetchCharacterList } from './components/CharacterService';
import { Characters } from './characters';
import { useEffect, useState } from 'react';


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
function App() {

  //ENTRADA

  //criação das props = campos(inforamções que você irá receber do usuário)
  const [characters, setCharacters] = useState<Characters[]>([]);

  const header = (
    // <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    <div className="flex flex-wrap gap-5" style={{padding : 10}}>
      <div className="flex-auto">
          <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
          <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
          <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
      </div>
    </div>
);
const footer = (
    <>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
);

  //PROCESSAMENTO

  const imageBodyTemplate = (characters: Characters) => {
    return <img src={characters.image} 
    alt={characters.description} 
    className="w-6rem shadow-2 border-round" />;
  };

  const imageBodyTemplatev2 = (characters: Characters) => {
    return <Avatar image={characters.image} shape="circle" />
};



  useEffect(()=>{
    const getCharacter = async () =>{
        const result = await fetchCharacterList();
        setCharacters(result);
    };      
    getCharacter();
}, []);


  const data = fetchCharacterList()
  console.log(data)

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
        <div className="card">
        <Card title="Simple Card">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </Card>
        </div>

        <div className="card flex justify-content-center">
          <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
              <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                  numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </p>
          </Card>
        </div>
    </>
  )
}

export default App
