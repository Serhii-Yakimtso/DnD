import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

import './App.module.css';
import HomePage from '../../pages/HomePage/HomePage';
import CharacterList from '../../pages/CharacterList/CharacterList';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character-list" element={<CharacterList />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
