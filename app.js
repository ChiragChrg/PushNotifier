const registerUser = async () => {
    const uName = document.getElementById('uName').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('pass').value;
    const Role = document.getElementById('role').value;
    console.log({uName, Email, Role, Password});

    // const result = await axios.post('http://localhost:8080/register', {uName, Email, Role, Password});
    // console.log(result.data);

    let sw = await navigator.serviceWorker.ready;
    let sub = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE"
    })
    console.log(sub);
};