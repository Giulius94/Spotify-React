import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage'
import LibraryPage from './pages/LibraryPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/album_page" element={<AlbumPage />} />
          <Route path="/artist_page" element={<ArtistPage />} />
          <Route path="/library_page" element={<LibraryPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
