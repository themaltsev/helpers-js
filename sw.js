export default function serviceWorker() {


    if ('serviceWorker' in navigator && 'PushManager' in window) {
        // console.log('Service Worker and Push is supported');
        navigator.serviceWorker.register('../sw.js')
            .then(() => {
                // console.log('Service Worker is registered', swReg);

                window.onmousemove = () => {
                    setTimeout(() => {
                        requestPermission()
                    }, 5000);
                    window.onmousemove = null;
                };

                window.ontouchmove = () => {
                    setTimeout(() => {
                        requestPermission()
                    }, 5000);
                    window.ontouchmove = null;
                };

            })
            .catch((err) => {
                console.log('service worker not working');
            });
    } else {
        // console.log('Push messaging is not supported');
        // custompush();
    }



    const requestPermission = () => {
        return new Promise(function(resolve, reject) {
                const permissionResult = Notification.requestPermission((result) => {
                    // Поддержка устаревшей версии с функцией обратного вызова.
                    resolve(result);
                });
                if (permissionResult) {
                    permissionResult.then(resolve, reject);
                }
            })
            .then((permissionResult) => {
                if (permissionResult !== 'granted') {
                    // console.log("Пользователь не разрешил показ уведомлений");
                    // custompush();
                    // throw new Error('Permission not granted.');
                }
            });
        return true;
    };


}
