export const ARTSHINE_CONTACT = {
  whatsappNumber: '+91 755 007 8993',
  whatsappUrl: 'https://wa.me/917550078993',
  instagramUrl: 'https://www.instagram.com/artshine_creative_learning/?stkn=Y2IxM3N3cWhyNmw3&utm_source=qr',
  // Add the confirmed official email address here to enable email enquiries.
  email: '',
};

export const getCourseWhatsAppUrl = (courseName = '') => {
  const message = courseName
    ? `Hello Artshine Creative Learning! I’m interested in the ${courseName} course. Could you please share the batch details?`
    : 'Hello Artshine Creative Learning! I’d like to know more about your classes. Could you please share the batch details?';

  return `${ARTSHINE_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
};
