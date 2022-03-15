let statOffline = false

let offlineTimeOut = 25

window.addEventListener("offline", (event) => {
cPush.show({
title:`Соединение потеряно с интернетом.`
})
statOffline = true

setTimeout(() => {

  if(statOffline) window.location.href = '/offline'

}, (offlineTimeOut - 2) * 1000);

});


window.addEventListener("online", (event) => {
cPush.show({
title:`Соединение с интернетом восстановлено.`
})
statOffline = false
});
