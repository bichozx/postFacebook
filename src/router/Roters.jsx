import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from '../components/Loguin';
import Post from '../page/Post'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}
