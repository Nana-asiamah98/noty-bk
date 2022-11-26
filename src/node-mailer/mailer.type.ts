type MailerType = {
    transport: {
      service: string;
      host: string;
      port: string;
      secure: string;
      auth: {
        user: string;
        password: string;
      };
    };
  };