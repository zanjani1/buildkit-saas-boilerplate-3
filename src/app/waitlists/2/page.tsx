// This is a completly modular waitlist component that can be used in any theme just by chainging the color scheme below.
// We have three color schemes available for the waitlist component as example.
// Select among following color scheems to try different waitlist themes
// You can add any color scheme of your choice to try different themes

import WaitlistComponent from '@/components/Waitlist';

const purpleTheme = {
  bg: '#1A1423',
  input: '#241735',
  button: '#774C60E5',
  border: '#856D78',
  dark: true,
};

export default function Waitlist() {
  return (
    <>
      <WaitlistComponent colorScheme={purpleTheme} />
    </>
  );
}
