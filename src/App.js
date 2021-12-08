import Profile from './components/Profile/Profile';
import './App.css';
import './reset.css'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import dataSet from './data';

const {
  data,
  friends,
  user,
  transaction
} = dataSet;

function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />;
    </div>
    );
}

export default App;
