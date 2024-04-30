import Homepage from './Pages/homepage';
import { Route, Routes } from 'react-router-dom';
import Category1page from './Pages/category1.page';
import SingleCategoryPage from './Pages/singleCategoryPage';
import CategoryDetailPage from './Pages/categoryDetail.page';
import CheckoutPage from './Pages/Checkout.page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category-1" element={<Category1page />} />
        <Route path="/single-category" element={<SingleCategoryPage />} />
        <Route path="/category-detail" element={<CategoryDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
