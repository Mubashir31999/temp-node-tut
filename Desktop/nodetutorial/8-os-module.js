


const os=require('os')
const user=os.userInfo()
console.log(user);
console.log('system uptime is'+os.uptime());
const currentos={
    name:os.type(),
    release:os.release(),
    totmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)