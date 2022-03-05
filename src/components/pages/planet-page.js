import React, {useContext} from 'react';
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import { Consumer } from '../swapi-context';
import { withRouter } from 'react-router-dom';


const PlanetPage = ({ selectedItemId, history }) => {
  const setSelectedItemId = (id) => {
    history.push(id)
  }
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


export default withRouter(PlanetPage);
