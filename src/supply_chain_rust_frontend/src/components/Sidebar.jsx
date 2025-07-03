import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3 position-fixed" style={{ width: '250px' }}>
      <h4>SupplyChain</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><Link to="/" className="nav-link text-white">Dashboard</Link></li>
        <li className="nav-item"><Link to="/register-product" className="nav-link text-white">Register Product</Link></li>
        <li className="nav-item"><Link to="/products" className="nav-link text-white">Product List</Link></li>
        <li className="nav-item"><Link to="/register-supplier" className="nav-link text-white">Register Supplier</Link></li>
        <li className="nav-item"><Link to="/suppliers" className="nav-link text-white">Supplier List</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
