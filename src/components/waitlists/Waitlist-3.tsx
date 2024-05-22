import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#FFFFFF',
  input: '#F7F7F7',
  button: '#0F6FFF',
  dark: false,
};

export default async function Waitlist3() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
