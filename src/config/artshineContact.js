export const ARTSHINE_CONTACT = {
  whatsappNumber: '+91 755 007 8993',
  whatsappUrl: 'https://wa.me/917550078993',
  instagramUrl: 'https://www.instagram.com/artshine_creative_learning/?stkn=Y2IxM3N3cWhyNmw3&utm_source=qr',
  email: 'artshineoff@gmail.com',
};

export const getCourseEmailUrl = (courseName = '') => {
  const subject = courseName
    ? `Enquiry for ${courseName} — Artshine Creative Learning`
    : 'Class enquiry — Artshine Creative Learning';
  const body = courseName
    ? `Hello Artshine Creative Learning,\n\nI would like to enquire about the ${courseName} course. Could you please share the batch availability and class details?\n\nThank you.`
    : 'Hello Artshine Creative Learning,\n\nCould you please share your batch availability and class details?\n\nThank you.';

  return `mailto:${ARTSHINE_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getCourseWhatsAppUrl = (courseName = '') => {
  const message = courseName
    ? `Hello Artshine Creative Learning! I’m interested in the ${courseName} course. Could you please share the batch details?`
    : 'Hello Artshine Creative Learning! I’d like to know more about your classes. Could you please share the batch details?';

  return `${ARTSHINE_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
};
