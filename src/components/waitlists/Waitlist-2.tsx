import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#1A1423',
  input: '#241735',
  button: '#774C60E5',
  border: '#856D78',
  dark: true,
};

export default async function Waitlist2() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
