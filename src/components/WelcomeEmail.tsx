import React from 'react';

interface WelcomeEmailProps {
  userFirstname: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ userFirstname }) => {
  return (
    <div style={main}>
      <div style={container}>
        <img
          src='https://utfs.io/f/f34b65da-6ade-48e4-bc41-06b639ede08f-ln8uob.png'
          width='100'
          height='60'
          alt='BuilderKit'
          style={logo}
        />
        <p style={paragraph}>Hi {userFirstname},</p>
        <p style={paragraph}>Welcome to BuilderKit, your one-stop solution for building SaaS applications.</p>
        <div style={btnContainer}>
          <a href='https://www.builderkit.ai/' style={button}>
            Get started
          </a>
        </div>
        <p style={paragraph}>
          <br /> {/* Added an additional line break */}
          Best,
          <br />
          The BuilderKit team
        </p>
        <hr style={hr} />
        <p style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</p>
      </div>
    </div>
  );
};

// Define styles using CSSProperties for type safety
const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  maxWidth: '600px',
  margin: '0 auto',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo: React.CSSProperties = {
  margin: '0 auto',
  display: 'block',
  objectFit: 'contain',
};

const paragraph: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};

const button: React.CSSProperties = {
  backgroundColor: '#5F51E8',
  borderRadius: '6px', // Increased the border radius
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '100%',
  padding: '12px 0',
  marginTop: '10px',
};

const hr: React.CSSProperties = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer: React.CSSProperties = {
  color: '#8898aa',
  fontSize: '12px',
};

export default WelcomeEmail;
