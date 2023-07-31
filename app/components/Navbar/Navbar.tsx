'use client';

import Search from './Search';
import Container from '../Container';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { SafeUser } from '@/app/types';
import Categories from './Categories';

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavBarProps> = ({
  currentUser,
}) => {
  return (
    <div className='fixed w-full bg-backround z-10 shadow-sm'>
      <div className='py-2 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
