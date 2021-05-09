// @flow

import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from 'components/layouts/DefaultLayout';
import HelmetPlus from 'components/HelmetPlus';
import {
  theme,
  ContentBlock,
  H1,
  H2,
  H3,
  Card,
  Link,
  Paragraph,
  CardContainer,
} from '@bitcoin-portal/bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const SLPPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H3 style={{ color: theme.palette.primary.main }}>Tokenize anything</H3>
        <H1 contrast>SLP SDK</H1>
        <H2 contrast>Secure Tokens on Bitcoin Cash</H2>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`SLP - ${data.site.siteMetadata.title}`}
      description="SLP based bitcoin.com developer platform and resources"
      keywords={[
        'slp',
        'simple ledger protocol',
        'bitcoin cash tokens',
        'build with SLP',
        'slp resources',
        'slp development',
      ]}
      location={location}
    />

    <ContentBlock>
      <H2>Simple Ledger Protocol</H2>
      <Paragraph balanced style={{ maxWidth: 'unset' }}>
        <Link
          href="https://simpleledger.cash/"
          target="_blank"
          style={{ display: 'inline' }}
        >
          Simple Ledger Protocol
        </Link>{' '}
        is simple, robust and extensible. All transactions are 100% on the
        blockchain for full auditability by any party. The first and currently
        only BCH token system to support light wallets. You can use multi
        signature addresses and other advanced Bitcoin script features with SLP
        tokens.
      </Paragraph>
      <CardContainer columns={3}>
        <Card
          small
          image={data.jsImage.childImageSharp.fluid.src}
          title="Javascript"
          subtitle="SLP SDK is a fully featured javascript framework powered by BITBOX. Everything you need to easily issue, spend or trade your own token. Install via NPM and talk to Bitcoin.com's cloud with no further setup."
          cta={{
            text: 'More',
            link: '/slp/docs/js/getting-started',
          }}
        />
        <Card
          small
          image={data.androidImage.childImageSharp.fluid.src}
          title="Android"
          subtitle="Install via Gradle. Convert between cash and slp address formats. Send tokens w/ balances, including both tokens and BCH, available as LiveData. Convenience methods to make it easier to display tokens. Timber for logging."
          cta={{
            text: 'More',
            link: '/slp/docs/android/getting-started',
          }}
        />
        <Card
          small
          image={data.iosImage.childImageSharp.fluid.src}
          title="iOS"
          subtitle="Install via CocoaPods. Generate mnemonics. Convert between cash and slp address formats. Send tokens and fetch token balances."
          cta={{
            text: 'More',
            link: '/slp/docs/ios/getting-started',
          }}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default SLPPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    jsImage: file(relativePath: { eq: "SLP_javascript.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    androidImage: file(relativePath: { eq: "SLP_android.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iosImage: file(relativePath: { eq: "SLP_ios.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
