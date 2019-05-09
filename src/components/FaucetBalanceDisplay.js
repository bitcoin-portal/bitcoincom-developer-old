// @flow
import React from 'react';
import { Paragraph, H4 } from 'bitcoincom-storybook';

type Props = {
  title: string,
  data: {
    item: string,
    amount: number | string,
  }[],
};
const BalanceDisplay = (props: Props) => {
  const { title, data } = props;

  return (
    <React.Fragment>
      <H4 center>{title}</H4>
      {data.map(val => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Paragraph center>
            {val.item} <span>{Number(val.amount).toFixed(8)}</span>
          </Paragraph>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BalanceDisplay;
