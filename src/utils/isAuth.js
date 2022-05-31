const isAuthorized = () => {
  return localStorage.getItem("email") ? true : false;
};

export { isAuthorized };
