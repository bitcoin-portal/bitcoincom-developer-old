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
  Button,
  Card,
  CardContainer,
} from '@bitcoin-portal/bitcoincom-storybook';

type Props = {
  location: Object,
  data: { heroImage: any },
};

const CashscriptPage = ({ location, data }: Props) => (
  <DefaultLayout
    location={location}
    hero={
      <ContentBlock>
        <H3 style={{ color: theme.palette.primary.main }}>
          Create Contracts & Complex Spending Scripts
        </H3>
        <H1 contrast>CashScript</H1>
        <H2 contrast>
          Everything you need to write Bitcoin Cash contracts and easily
          integrate them into your applications
        </H2>

        <Button round link dark href="/cashscript/docs/getting-started">
          Start Here
        </Button>
      </ContentBlock>
    }
  >
    <HelmetPlus
      title={`CashScript: CashScript SDK Reference`}
      description="Bitcoin.com developer platform, SDK and resources. Build on Bitcoin Cash (BCH)."
      canonical={`/cashscript`}
      keywords={[
        'cashscript',
        'cashscript documentation',
        'cashscript SDK',
        'bitcoin cash SDK',
        'smart contract',
      ]}
      location={location}
    />
    <ContentBlock>
      <CardContainer>
        <Card
          title="Getting Started"
          subtitle="CashScript is a high-level language that allows you to write Cash Contracts in a straightforward and familiar way."
          cta={{
            text: 'More',
            link: '/cashscript/docs/getting-started',
          }}
          image={data.rpcImage.childImageSharp.fluid.src}
        />
        <Card
          title="CashScript SDK"
          subtitle="The SDK allows you to compile CashScript files into Contract objects, from which these contracts can be instantiated and interacted with. "
          cta={{ text: 'More', link: '/cashscript/docs/sdk' }}
          image={data.semanticsImage.childImageSharp.fluid.src}
        />
      </CardContainer>
    </ContentBlock>
  </DefaultLayout>
);

export default CashscriptPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    rpcImage: file(relativePath: { eq: "Develop.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    semanticsImage: file(relativePath: { eq: "GUI.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
