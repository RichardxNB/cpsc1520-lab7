 async function appInit() {
    const res = await fetch('https://661ca41ee7b95ad7fa6ab2bc.mockapi.io/albums')
    const payload = await res.json()
    console.log(payload);
        
 }
 appInit()