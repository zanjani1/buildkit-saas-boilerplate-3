// This is a completly modular waitlist component that can be used in any theme just by chainging the color scheme below.
// We have three color schemes available for the waitlist component as example.
// Select among following color scheems to try different waitlist themes
// You can add any color scheme of your choice to try different themes

import WaitlistComponent from '@/components/Waitlist';

const greenTheme = {
  bg: '#031614',
  input: '#051A17',
  button: '#26AB75',
  border: '#51DCA3',
  dark: true,
};

export default function Waitlist() {
  return (
    <>
      <WaitlistComponent colorScheme={greenTheme} />
    </>
  );
}
