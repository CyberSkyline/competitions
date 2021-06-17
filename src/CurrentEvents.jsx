/* eslint-disable newline-per-chained-call */
import React from 'react';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';
import CustomCard from './CustomCard';
import competitions from './competitionData';

function CurrentEvents() {
  return (
    <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically'>
      {_.chain(competitions).sortBy('startDate').filter((element) => (new Date(element.endDate) > new Date() || element.endDate === null)).map((element) => (<CustomCard key={element.header} {...element} />)).value()}
    </Card.Group>
  );
}

export default CurrentEvents;
