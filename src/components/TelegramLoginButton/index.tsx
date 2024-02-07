import { useEffect } from 'react';

const TelegramLoginButton = ({ botName, dataOnauth }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", "http://127.0.0.1:3000");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", dataOnauth);
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-userpic", "false");
    script.async = true;

    document.body.appendChild(script);
  }, [botName, dataOnauth]);

  return null;
};

export default TelegramLoginButton;
