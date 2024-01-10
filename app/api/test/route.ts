export async function GET() {
  await sleep(3000)
  return Response.json({
    msg: 'hello',
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
  })
}
