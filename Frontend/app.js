const pubKey = 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE';
let subscription;

axios.headers = {
    'Access-Control-Allow-Origin': '*',
}

if('serviceWorker' in navigator) {
    const sendNotif = async () => {
        const register = await navigator.serviceWorker.register('./sw.js', {scope: '.'});
    
        subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(pubKey)
        });
    
        // const result = await fetch('http://localhost:8080/subscribe', {
        //     method: 'POST',
        //     body: JSON.stringify(subscription),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // });
    }

    sendNotif().catch(err => console.error(err));
}

const registerUser = async () => {
    const uName = document.getElementById('uName').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('pass').value;
    const Role = document.getElementById('role').value;
    const sub = subscription;
    console.log({uName, Email, Role, Password});
    // const result = await axios.post('https://push-notifier.vercel.app/register', {uName, Email, Role, Password, sub});
    const result = await axios.post('http://localhost:8080/register', {uName, Email, Role, Password, sub});
    console.log(result.data);
};

//urlbase64ToUint8Array
const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}