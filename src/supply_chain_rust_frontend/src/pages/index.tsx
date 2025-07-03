import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductRegistration from '../components/ProductRegistration';
import ProductSearch from '../components/ProductSearch';
import ProductList from '../components/ProductList';
import OwnershipTransfer from '../components/OwnershipTransfer';
import CertificationManager from '../components/CertificationManager';
import UserProfileMenu from '../components/UserProfileMenu';
import FeatureCard from '../components/FeatureCard';
import { Product, Transaction } from '../types/SupplyChain';

const Index = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [currentUser, setCurrentUser] = useState('user-123');
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  const [isFeatureHovered, setIsFeatureHovered] = useState(false);

  // Mock function to simulate ICP canister calls
  const refreshUserProducts = async () => {
    // In real implementation, this would call your ICP canister
    console.log('Refreshing user products for:', currentUser);
  };

  useEffect(() => {
    refreshUserProducts();
  }, [currentUser]);

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
  };

  const features = [
    {
      icon: '🌱',
      title: 'Origin Tracking',
      description: 'Verify authentic product origins with immutable blockchain records'
    },
    {
      icon: '📜',
      title: 'Smart Certifications',
      description: 'Manage and verify quality certificates with cryptographic proof'
    },
    {
      icon: '🔄',
      title: 'Real-time Flow',
      description: 'Monitor complete supply chain journey in real-time'
    }
  ];

  return (
    <div className="min-h-screen position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      minHeight: '100vh'
    }}>
      {/* Enhanced animated background elements with industry graphics */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: -1 }}>
        {/* Floating geometric shapes */}
        <div className="position-absolute animate-float-slow" style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 70%)',
          top: '5%',
          left: '5%',
          filter: 'blur(1px)',
          borderRadius: '50%'
        }}></div>
        
        {/* Hexagonal pattern */}
        <div className="position-absolute animate-pulse" style={{
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
          top: '20%',
          right: '15%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          filter: 'blur(0.5px)'
        }}></div>

        {/* Circuit-like lines */}
        <div className="position-absolute" style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          top: '40%',
          left: '0',
          animation: 'slideRight 8s infinite'
        }}></div>

        {/* Data flow visualization */}
        <div className="position-absolute animate-bounce" style={{
          width: '120px',
          height: '120px',
          background: 'conic-gradient(from 45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          bottom: '20%',
          left: '20%',
          borderRadius: '50%',
          filter: 'blur(1px)'
        }}></div>

        {/* Network nodes */}
        {[1, 2, 3, 4, 5].map((node) => (
          <div
            key={node}
            className="position-absolute animate-pulse"
            style={{
              width: '6px',
              height: '6px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              top: `${20 + node * 15}%`,
              left: `${10 + node * 20}%`,
              animationDelay: `${node * 0.5}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          ></div>
        ))}
      </div>

      {/* Content overlay with blur effect when feature is hovered */}
      <div className={`transition-all duration-500 ${isFeatureHovered ? 'blur-sm' : ''}`}>
        {/* Enhanced Header with User Profile */}
        <nav className="navbar navbar-expand-lg py-3" style={glassCard}>
          <div className="container">
            <a className="navbar-brand fw-bold text-white d-flex align-items-center" href="#" style={{ fontSize: '1.5rem' }}>
              <span className="me-2" style={{ fontSize: '2rem' }}>🔗</span>
              <div>
                <div>Supply Chain Tracker</div>
                <small className="text-white-50" style={{ fontSize: '0.75rem', fontWeight: 'normal' }}>
                  Blockchain-Powered Transparency
                </small>
              </div>
            </a>
            <div className="d-flex align-items-center gap-3">
              <span className="badge text-white" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 12px',
                borderRadius: '12px'
              }}>
                ICP Network
              </span>
              <span className="text-white-50 small d-none d-md-inline">ID: {currentUser}</span>
              <UserProfileMenu />
            </div>
          </div>
        </nav>

        {/* Enhanced Hero Section */}
        <div className="py-5 mb-4">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="display-3 fw-bold mb-4 text-white animate-fade-in" style={{ 
                letterSpacing: '-0.02em',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}>
                Transparent Supply Chain
              </h1>
              <p className="lead mb-4 text-white opacity-90 animate-fade-in" style={{ 
                fontSize: '1.25rem', 
                maxWidth: '600px', 
                margin: '0 auto',
                animationDelay: '0.2s'
              }}>
                Track products from origin to consumer with tamper-proof blockchain technology powered by Internet Computer Protocol
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="row justify-content-center g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    onHover={setIsFeatureHovered}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mb-5">
          {/* Enhanced Navigation Tabs */}
          <div className="mb-4 animate-slide-up" style={glassCard}>
            <div className="p-3">
              <ul className="nav nav-pills nav-fill mb-0">
                {[
                  { id: 'register', label: '📝 Register Product', desc: 'Add new products' },
                  { id: 'search', label: '🔍 Search Products', desc: 'Find any product' },
                  { id: 'myProducts', label: '📦 My Products', desc: 'Your inventory' },
                  { id: 'transfer', label: '🔄 Transfer', desc: 'Change ownership' },
                  { id: 'certify', label: '🏆 Certify', desc: 'Add certificates' }
                ].map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <button
                      className={`nav-link d-flex flex-column align-items-center py-3 ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        background: activeTab === tab.id 
                          ? 'rgba(255, 255, 255, 0.25)' 
                          : 'transparent',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        backdropFilter: activeTab === tab.id ? 'blur(10px)' : 'none',
                        transition: 'all 0.3s ease',
                        minHeight: '80px'
                      }}
                    >
                      <div className="fw-semibold mb-1" style={{ fontSize: '0.9rem' }}>
                        {tab.label}
                      </div>
                      <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
                        {tab.desc}
                      </small>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content animate-fade-in">
            <div style={glassCard}>
              <div className="p-4">
                {activeTab === 'register' && (
                  <ProductRegistration onProductAdded={refreshUserProducts} />
                )}
                {activeTab === 'search' && (
                  <ProductSearch />
                )}
                {activeTab === 'myProducts' && (
                  <ProductList currentUser={currentUser} products={userProducts} />
                )}
                {activeTab === 'transfer' && (
                  <OwnershipTransfer onTransferComplete={refreshUserProducts} />
                )}
                {activeTab === 'certify' && (
                  <CertificationManager onCertificationAdded={refreshUserProducts} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="py-4 mt-auto" style={glassCard}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0 text-white">
                  <strong>Powered by Internet Computer Protocol (ICP)</strong>
                </p>
                <small className="text-white-50">
                  Secure • Transparent • Decentralized • Tamper-Proof
                </small>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex justify-content-md-end gap-3 mt-2 mt-md-0">
                  <span className="badge" style={{
                    background: 'rgba(34, 197, 94, 0.2)',
                    color: '#22c55e',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}>
                    ✓ Secure
                  </span>
                  <span className="badge" style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#3b82f6',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}>
                    ⚡ Fast
                  </span>
                  <span className="badge" style={{
                    background: 'rgba(168, 85, 247, 0.2)',
                    color: '#a855f7',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}>
                    🌐 Global
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;