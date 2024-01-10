export async function GET() {
  return Promise.race([getHello(), timeOut()])
}

async function getHello() {
  await sleep(3000)
  return Response.json({
    msg: 'hello',
  })
}

async function timeOut() {
  await sleep(1000)
  return Response.json({
    msg: 'timeOut',
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
  })
}
