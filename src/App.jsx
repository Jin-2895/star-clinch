import Homepage from './Pages/homepage';
import { Route, Routes } from 'react-router-dom';
import Category1page from './Pages/category1.page';
import SingleCategoryPage from './Pages/singleCategoryPage';
import CategoryDetailPage from './Pages/categoryDetail.page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category-1" element={<Category1page />} />
        <Route path="/single-category" element={<SingleCategoryPage />} />
        <Route path="/category-detail" element={<CategoryDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
