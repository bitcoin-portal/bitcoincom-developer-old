// @flow

import 'isomorphic-fetch';
import React from 'react';
import styled from 'styled-components';

import Button from 'atoms/Button';
import StyledLink, { SmartLink } from 'atoms/StyledLink';
import H3 from 'atoms/H3';
import Text from 'atoms/Text';
import Input from 'atoms/Input';
import Well from 'atoms/Well';
import spacing from 'styles/spacing';

import FaucetBalanceDisplay from './FaucetBalanceDisplay';

const SERVER = `https://faucet.bchtest.net`;

const WrapperDiv = styled.div`
  padding-top: ${spacing.large};
  display: grid;
  grid-gap: ${spacing.small};
`;

const TxLink = styled.p`
  padding: 25px;
`;

const AddressForm = styled.form`
  display: grid;
  grid-gap: ${spacing.small};
  grid-auto-columns: min-content;
`;

type Props = {};
type State = {
  outputText: string, // Output of the Well.
  bchAddr: string, // bchAddress provided by user.
  linkAddr: string, // Link URL to block explorer.
  linkOn: boolean, // Toggles block explorer link.
  balance: number, // Initial balance before retreiving form server.
};

class BchFaucet extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      outputText: '',
      bchAddr: '',
      linkAddr: '#',
      linkOn: false,
      balance: 0,
    };
  }

  // Updates the state as the user updates the input form.
  handleChange = ({ target }) => {
    this.setState({ bchAddr: target.value });
  };

  getBalance = async () => {
    const resp = await fetch(`${SERVER}/coins/`);
    const body = await resp.json();

    this.setState(() => ({
      balance: body.balance,
    }));
  };

  requestBCH = async () => {
    const { bchAddr } = this.state;
    try {
      this.wipeOutput();

      this.addOutput(`Sending request...`);

      if (bchAddr === '') {
        this.addOutput(`Error: BCH Address can not be blank`);
        return;
      }

      const resp = await fetch(`${SERVER}/coins/${bchAddr}`);
      const body = await resp.json();
      console.log(`body: ${JSON.stringify(body, null, 2)}`);

      if (!body.success) {
        const { message } = body;

        if (message === `Invalid BCH cash address.`)
          this.addOutput(`Error: Invalid BCH testnet address`);
        else
          this.addOutput(
            `Error: This BCH address has been used before, or you need to wait 24 hours to request from this IP address.`,
          );

        return;
      }

      this.addOutput(`Success: testnet BCH are on their way!`);
      this.addOutput(`TXID: ${body.txid}`);

      // Show the link to the block explorer.
      this.showLink(body.txid);
    } catch (err) {
      console.log(`Error in requestBCH: `, err);
    }
  };

  // Add another line to the output.
  addOutput = (str: string) => {
    this.setState(prevState => ({
      outputText: `${prevState.outputText}\n${str}`,
    }));
  };

  // Clear the output.
  wipeOutput = () => {
    this.setState(() => ({
      outputText: '',
    }));
  };

  showLink(txid: string) {
    this.setState(() => ({
      linkOn: true,
      linkAddr: `https://explorer.bitcoin.com/tbch/tx/${txid}`,
    }));
  }

  render() {
    const { balance, bchAddr, outputText, linkOn, linkAddr } = this.state;
    if (balance === 0) this.getBalance();

    return (
      <WrapperDiv>
        <H3>
          This is a <u>testnet</u> faucet for Bitcoin Cash! It is built with{' '}
          <StyledLink to="/bitbox">BITBOX JavaScript SDK</StyledLink> and is
          funded by the{' '}
          <SmartLink to="https://www.bitcoin.com/bitcoin-mining">
            Bitcoin.com Mining Pool
          </SmartLink>
          . It currently gives out <u>0.1 BCH</u>.
        </H3>

        <FaucetBalanceDisplay
          title="Current faucet balance"
          data={[{ item: 'BCH', amount: balance }]}
        />

        <Text>
          <SmartLink to="https://github.com/Bitcoin-com/testnet-faucet">
            Fork the code on GitHub!
          </SmartLink>
        </Text>

        <AddressForm>
          <Text for="bchAddr" as="label" bold>
            BCH Testnet Address
          </Text>
          <Input
            type="text"
            id="bchAddr"
            size="60"
            placeholder="bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35"
            value={bchAddr}
            onChange={this.handleChange}
          />
          <Button type="button" onClick={this.requestBCH}>
            Get tBCH!
          </Button>
        </AddressForm>

        <Well>
          <Text>{outputText}</Text>
        </Well>

        {linkOn && (
          <TxLink>
            <SmartLink to={linkAddr}>View TX on Block Explorer</SmartLink>
          </TxLink>
        )}

        <Text>
          Please send your leftover testnet coins back to the faucet:
          <br />
          <i>bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35</i>
        </Text>
      </WrapperDiv>
    );
  }
}

export default BchFaucet;
