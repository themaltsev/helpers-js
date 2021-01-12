    let vv = {
      data: '123',
      data2: '222'
    }


    fetch('https://themaltsev-crm-default-rtdb.firebaseio.com/task.json', {
      method: "POST",
      body: JSON.stringify(vv),
      headers: {
        'Content-Type': 'aplication/json'
      }
    })
