const getFetch = async (url, handledom) => {
  try {
    showLoading();
    const data = await fetch(url, { method: 'GET' });
    const jsonData = await data.json();
    hideLoading();
    handledom(jsonData);
  } catch (error) { throw new Error(error); }
};
