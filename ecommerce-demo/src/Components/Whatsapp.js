import React from 'react';
import whatsappLogo from './../assets/images/whatsapp.png'

const WhatsAppChatButton = () => {
  const phoneNumber = '+251xxxxxxxx'; // Replace with your phone number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-chat-button fixed bottom-4 right-4 z-50"
    >
      <img src={whatsappLogo} width="50" alt="WhatsApp Logo" />
    </a>
  );
};

export default WhatsAppChatButton;