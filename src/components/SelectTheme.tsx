// This component is used to switch between light and dark themes.
// It uses the next-themes package to switch between themes.
// The component uses the useTheme hook to get the current theme and setTheme to switch between themes.

'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function SelectTheme() {
  const { theme, setTheme } = useTheme();

  // Set the theme to the opposite of the current theme between light and dark
  const handleThemeChange = () => {
    const selectedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(selectedTheme);
  };

  return (
    <>
      {/* The button toggles between the light and dark themes when clicked */}
      {/* It has two icons, a sun icon for the light theme and a moon icon for the dark theme. */}
      <Button
        variant='ghost'
        size='icon'
        className='focus-visible:ring-0 dark:bg-[#031614]'
        onClick={handleThemeChange}>
        <SunIcon className='size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </>
  );
}
