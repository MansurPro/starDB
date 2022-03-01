import React, {useState, useContext} from 'react';
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import { Consumer } from '../swapi-context';


const PlanetPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)
  const swapi = useContext(Consumer)

  const leftElement = (
    <ItemList 
      getData={swapi.getAllPlanets}
      setSelectedItemId={setSelectedItemId}
    >
      {(data) => data.name}
    </ItemList>
  );
  const rightElement = (
    <ItemDetails
      getData={swapi.getPlanet}
      getImage={swapi.getPlanetImage}
      selectedItemId={selectedItemId} 
    >
      <Record label='Population' fieldName='population' />
      <Record label='Rotation Period' fieldName='rotationPeriod' />
      <Record label='Diameter' fieldName='diameter' />
    </ItemDetails>
  );

  return <Row left={leftElement} right={rightElement}/>
}


export {PlanetPage};
