import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogIn, UserPlus, Shield } from 'lucide-react';

const UserProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = () => {
    console.log('Sign In clicked');
    // Add sign in logic here
  };

  const handleRegister = () => {
    console.log('Register clicked');
    // Add register logic here
  };

  const handleGuest = () => {
    console.log('Continue as Guest clicked');
    // Add guest logic here
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="outline-none">
        <div className="relative">
          <Avatar className="w-10 h-10 cursor-pointer ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 hover:scale-105">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 mr-4 mt-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white"
        align="end"
      >
        <DropdownMenuLabel className="text-white/90">Account Options</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/20" />
        
        <DropdownMenuItem 
          onClick={handleSignIn}
          className="cursor-pointer hover:bg-white/10 focus:bg-white/10 text-white/90 hover:text-white"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={handleRegister}
          className="cursor-pointer hover:bg-white/10 focus:bg-white/10 text-white/90 hover:text-white"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Register
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-white/20" />
        
        <DropdownMenuItem 
          onClick={handleGuest}
          className="cursor-pointer hover:bg-white/10 focus:bg-white/10 text-white/90 hover:text-white"
        >
          <Shield className="mr-2 h-4 w-4" />
          Continue as Guest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileMenu;