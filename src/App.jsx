
import UserProfile from './Level/Level_2/ComponentSplit.jsx';



function App() {
  return (
    <div>
      <UserProfile user={{ avatar: 'https://example.com/avatar.jpg', info: { name: '张三' } }} />
    </div>
  );
}

export default App;
