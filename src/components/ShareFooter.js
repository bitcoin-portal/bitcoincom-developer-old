// @flow

import React from 'react';
import { Helmet } from 'react-helmet';
import { ContentBlock, H2, Button } from 'bitcoincom-storybook';

const SharedFooter = () => (
  <>
    <Helmet>
      <script
        type="text/javascript"
        src="https://a.opmnstr.com/app/js/api.min.js"
        data-account="52780"
        data-user="46652"
        async
      />
    </Helmet>
    <ContentBlock>
      <H2>Do You Want To Get Free Developer Resources?</H2>
      <Button
        link
        primary
        href="https://app.monstercampaigns.com/c/v8lwzo6nqacmgnulutqp/"
        style={{ margin: 'auto', marginTop: 32 }}
      >
        {"Yes, I'm Interested"}
      </Button>
    </ContentBlock>
  </>
);

export default SharedFooter;
