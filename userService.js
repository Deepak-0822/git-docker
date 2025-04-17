// Simulating a basic user service module

function getUserData(id) {
    let user = {
      id: id,
      name: "John Doe",
      email: "john@example.com"
    }
  
    console.log("Fetched user data:", user) // ESLint will flag `console.log`
  
    return user;
  }
  
  function unusedHelper() {
    const message = "This function is never used"; // ESLint will flag unused var
  }
  
  const getUserEmail = (user) => {
    if (user.email == "john@example.com") { // ESLint will flag `==`
      return "Default user";
    }
    return user.email;
  };
  
  module.exports = { getUserData, getUserEmail };
  