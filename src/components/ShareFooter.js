// @flow

import React from 'react';
// import styled from 'styled-components';
// import { FaReddit, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

// import H3 from 'atoms/H3';
// import Text from 'atoms/Text';
// import { SmartLink } from 'atoms/StyledLink';

// import Container from 'components/Container';
import { ContentBlock, H2, Button } from 'bitcoincom-storybook';
// import spacing from 'styles/spacing';
// import media from 'styles/media';

/* const ShareLayout = styled.div`
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  display: grid;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.medium};
  border-top: 1px dashed ${props => props.theme.backgroundMuted};
  padding-top: ${spacing.medium};
  ${media.medium`
    grid-template-columns: .5fr .5fr;
  `};
`;

const EmailCTA = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
`;

const ShareCTA = styled.div`
  min-height: 75px;
  display: grid;
  align-content: end;
`;

const SocialLinks = styled(H3)`
  justify-content: end;
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;
  grid-template-rows: 1fr;
  grid-gap: ${spacing.small};
`;

type Props = {
  location: Object,
}; */

class SharedFooter extends React.Component {
  componentDidMount() {
    const om = document.createElement('script');
    om.src = `https://a.optmnstr.com/app/js/api.min.js`;
    om.setAttribute('data-campaign', 'v8lwzo6nqacmgnulutqp');
    om.setAttribute('data-user', '46652');
    om.async = true;
    document.body.appendChild(om);

    setTimeout(() => {
      if (window.omv8lwzo6nqacmgnulutqp) {
        window.omv8lwzo6nqacmgnulutqp.reset();
      }
    }, 1000);

    // Keep track of the script tag
    this.scriptTag = om;
  }

  componentWillUnmount() {
    document.body.removeChild(this.scriptTag);
  }

  render() {
    return (
      <ContentBlock>
        <H2>Do You Want To Get Free Developer Resources?</H2>
        {/* <EmailCTA>
          <div id="om-v8lwzo6nqacmgnulutqp-holder" />
        </EmailCTA> */}
        <Button link primary href="/" style={{ margin: 'auto', marginTop: 32 }}>
          {"Yes, I'm Interested"}
        </Button>
      </ContentBlock>
    );
  }
}

export default SharedFooter;
