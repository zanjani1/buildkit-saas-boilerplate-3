function welcomeEmail(name: string) {
  return `
    <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;">
      <div style="margin: 0 auto; padding: 20px 0 48px;">
        <img
          src='https://utfs.io/f/f34b65da-6ade-48e4-bc41-06b639ede08f-ln8uob.png'
          width='100'
          height='60'
          alt='BuilderKit'
          style="margin: 0 auto; display: block; object-fit: contain;"
        />
        <p style="font-size: 16px; line-height: 26px;">Hi ${name},</p>
        <p style="font-size: 16px; line-height: 26px;">Welcome to BuilderKit, your one-stop solution for building SaaS applications.</p>
        <div style="width: 100%; text-align: center;">
          <a href='https://www.builderkit.ai/' style="background-color: #5F51E8; border-radius: 6px; color: #fff; font-size: 16px; text-decoration: none; text-align: center; display: block; width: 100%; padding: 12px 0; margin-top: 10px;">
            Get started
          </a>
        </div>
        <p style="font-size: 16px; line-height: 26px;">
          <br />
          Best,
          <br />
          The BuilderKit team
        </p>
        <hr style="border-color: #cccccc; margin: 20px 0;" />
        <p style="color: #8898aa; font-size: 12px;">470 Noor Ave STE B #1148, South San Francisco, CA 94080</p>
      </div>
    </div>
  `;
}

export default welcomeEmail;
