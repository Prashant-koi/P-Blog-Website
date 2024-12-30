import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './header';
// import Post from './post';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';
// import Home from './Home';


function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/create' element={<CreatePost />} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/edit/:id' element={<EditPost />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
    
    
    //SOmething is messed up with the router //fixed finally
    
  );
}

export default App;
