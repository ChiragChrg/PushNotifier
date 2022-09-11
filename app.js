const registerUser = async (e) => {
    e.preventDefault();
    const uName = document.getElementById('uName').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('pass').value;
    const Role = document.getElementById('role').value;
    console.log(uName, Email, Role, Password);

    // const result = await axios.post('/register', {uName, Email, Role, Password});
    // console.log(result);
};