/* eslint-disable newline-per-chained-call */
import React from 'react';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';
import CustomCard from './CustomCard';
import competitions from './competitionData';

function PastEvents() {
  return (
    <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically'>
      {_.chain(competitions).orderBy((competition) => new Date(competition.startDate), 'desc').filter((element) => (element.endDate !== null && element.endDate <= new Date())).map((element) => (<CustomCard key={element.header} {...element} />)).value()}
    </Card.Group>
  );
}

export default PastEvents;
