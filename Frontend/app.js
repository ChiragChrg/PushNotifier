const pubKey = 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE';
const Log = document.getElementById('log');
let subscription;

axios.headers = {
    'Access-Control-Allow-Origin': '*',
}

if('serviceWorker' in navigator) {
    const sendNotif = async () => {
        Log.innerHTML += '<p>Registering Service Worker...</p>';
        
        const register = await navigator.serviceWorker.register('./sw.js');

        subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(pubKey)
        });
        Log.innerHTML += '<p>Service Worker Registered.</p>';
    
        // const result = await fetch('http://localhost:8080/subscribe', {
        //     method: 'POST',
        //     body: JSON.stringify(subscription),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // });
    }

    sendNotif().catch(err => {
        console.error(err)
        window.location.reload();
    });
}

const registerUser = async () => {
    const uName = document.getElementById('uName').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('pass').value;
    const Role = document.getElementById('role').value;
    const sub = subscription;

    Log.innerHTML += `<p>Registering new ${Role}...</p>`;
    Log.innerHTML += `<p>Subscribing to Push Notification...</p>`;
    console.log({uName, Email, Role, Password});

    try{
        // const result = await axios.post('https://pushnotifier.onrender.com/register', {uName, Email, Role, Password, sub});
        const result = await axios.post('http://localhost:8080/register', {uName, Email, Role, Password, sub});
        console.log(result.data);
        Log.innerHTML += `<p>${Role} Registered.</p>`;
    } catch(err) {
            console.log(err);
    }
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