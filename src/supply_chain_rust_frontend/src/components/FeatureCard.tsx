import { useState } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  onHover: (isHovered: boolean) => void;
}

const FeatureCard = ({ icon, title, description, onHover }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <div 
      className={`h-100 p-4 text-center cursor-pointer transition-all duration-500 ease-out transform ${
        isHovered ? 'scale-110 z-20' : 'scale-100 z-10'
      }`}
      style={{
        background: isHovered 
          ? 'rgba(255, 255, 255, 0.25)' 
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: isHovered ? 'blur(25px)' : 'blur(15px)',
        border: isHovered 
          ? '2px solid rgba(255, 255, 255, 0.3)' 
          : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        boxShadow: isHovered 
          ? '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)' 
          : '0 4px 24px rgba(0, 0, 0, 0.05)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`mb-3 transition-all duration-300 ${
          isHovered ? 'transform scale-125' : ''
        }`} 
        style={{ fontSize: '3.5rem' }}
      >
        {icon}
      </div>
      <h5 className={`text-white fw-semibold mb-3 transition-all duration-300 ${
        isHovered ? 'text-shadow-lg' : ''
      }`}>
        {title}
      </h5>
      <p className={`text-white mb-0 transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-80'
      }`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;