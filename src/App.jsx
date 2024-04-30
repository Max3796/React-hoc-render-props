import './App.css';
import LikeImage from './components/Project2/LikeImage';
import LikePost from './components/Project2/LikePost';


function App() {
  return (
    <div className='container1' > 
        <h1>Some Blogs using HOC</h1>
        <LikePost/>
        <LikeImage/>
      </div>
  );
}

export default App;
