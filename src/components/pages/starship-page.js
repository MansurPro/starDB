import React, {useState, useContext} from 'react';
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import { Consumer } from '../swapi-context';


const StarshipPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)
  const swapi = useContext(Consumer)

  const leftElement = (
    <ItemList 
      getData={swapi.getAllStarships}
      setSelectedItemId={setSelectedItemId}
    >
      {(data) => data.name}
    </ItemList>
  );
  const rightElement = (
    <ItemDetails
      getData={swapi.getStarship}
      getImage={swapi.getStarshipImage}
      selectedItemId={selectedItemId} 
    >
      <Record label='Model' fieldName='model' />
      <Record label='Cost in Credits' fieldName='costInCredits' />
      <Record label='Length' fieldName='length' />
      <Record label='Crew' fieldName='crew' />
      <Record label='Passengers' fieldName='passengers' />
    </ItemDetails>
  );

  return <Row left={leftElement} right={rightElement}/>
}


export {StarshipPage};
