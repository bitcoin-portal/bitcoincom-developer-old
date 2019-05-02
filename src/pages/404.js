// @flow

import React from 'react';
import DefaultLayout from 'components/layouts/DefaultLayout';

import { H1, Paragraph } from 'bitcoincom-storybook';

type Props = {
  location: Object,
};
const NotFoundPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <H1>NOT FOUND</H1>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </DefaultLayout>
);

export default NotFoundPage;
