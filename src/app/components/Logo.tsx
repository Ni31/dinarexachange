import { FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subtitleSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`bg-white-500 rounded-lg flex items-center justify-center mr-2 ${sizeClasses[size]}`}>
        <Image
          src="/logo.png"
          alt="Dinar Exchange Logo"
          width={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          height={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          className="object-contain"
        />
      </div>
      {showText && (
        <div>
          <h1 className={`font-bold text-gray-900 ${textSizeClasses[size]}`}>Dinar Exchange</h1>
          <p className={`${subtitleSizeClasses[size]} text-orange-500 font-medium flex items-center`}>
            <FaGlobe className="mr-1" /> Australia
          </p>
        </div>
      )}
    </div>
  );
}