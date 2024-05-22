import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#FFFFFF',
  primary: '#F7F7F7',
  secondary: '#0F6FFF',
  dark: false,
};

export default async function Waitlist3() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
