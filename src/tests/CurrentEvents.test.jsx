/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from '@jest/globals';
import CurrentEvents from '../CurrentEvents';
import PastEvents from '../PastEvents';
import competitions from '../competitionData';

it('checks for current competitions in the right group', () => {
  render(<CurrentEvents />);
  competitions.forEach((competition) => {
    if (new Date(competition.endDate) > new Date() || new Date(competition.endDate) === null) {
      expect(screen.getByText(competition.header)).toBeInTheDocument();
    }
  });
  expect(screen.getByText('Collegiate Pentesting Competition')).toBeInTheDocument();
});

it('checks for past competitions in the right group', () => {
  render(<PastEvents />);
  competitions.forEach((competition) => {
    if (new Date(competition.endDate) !== null && new Date(competition.endDate) <= new Date()) {
      expect(screen.getByText(competition.header)).toBeInTheDocument();
    }
  });
  expect(screen.getByText('PicoCTF')).toBeInTheDocument();
});
