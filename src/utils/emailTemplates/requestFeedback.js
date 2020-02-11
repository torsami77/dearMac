/* eslint-disable camelcase */
const requestFeedback = (data) => {
  const {
    first_name, link
  } = data;
  const theEmail = `
        <html><head>${first_name}</head><body> ${link} connectFeedBack HTML</body></html>
        `;
  return theEmail;
};
  
export default requestFeedback;
