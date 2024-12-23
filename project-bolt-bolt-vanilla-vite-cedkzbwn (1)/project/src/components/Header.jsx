import React from 'react';
import Logo from './branding/Logo';
import SocialButton from './buttons/SocialButton';
import { SOCIAL_LINKS } from '../constants/tokenData';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <SocialButton href={SOCIAL_LINKS.twitter}>
          Follow on X
        </SocialButton>
      </div>
    </header>
  );
}