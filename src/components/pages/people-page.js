import React, {useState, useContext} from 'react';
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import { Consumer } from '../swapi-context';


const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)
  const swapi = useContext(Consumer)

  const leftElement = (
    <ItemList 
      getData={swapi.getAllPeople}
      setSelectedItemId={setSelectedItemId}
    >
      {(data) => data.name}
    </ItemList>
  );
  const rightElement = (
    <ItemDetails
      getData={swapi.getPerson}
      getImage={swapi.getPersonImage}
      selectedItemId={selectedItemId} 
    >
      <Record label='Gender' fieldName='gender' />
      <Record label='Eye color' fieldName='eyeColor' />
      <Record label='Birth year' fieldName='birthYear' />
    </ItemDetails>
  );

  return <Row left={leftElement} right={rightElement}/>
}


export {PeoplePage};
