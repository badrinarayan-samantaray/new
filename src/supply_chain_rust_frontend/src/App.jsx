import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RegisterProduct from './components/RegisterProduct';
import RegisterSupplier from './components/RegisterSupplier';
import ProductList from './components/ProductList';
import SupplierList from './components/SupplierList';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
        <Navbar />
        <main className="p-4" style={{ marginTop: '56px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register-product" element={<RegisterProduct />} />
            <Route path="/register-supplier" element={<RegisterSupplier />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/suppliers" element={<SupplierList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
