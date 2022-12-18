import { Container } from "./Container";

import { Profile } from './Profile';
import user from '../backend/user';

import { Statistics } from './Statistics';
import data from '../backend/data';

import { FriendList } from './FriendList';
import friends from '../backend/friends';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../backend/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
