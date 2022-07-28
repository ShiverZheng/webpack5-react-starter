const sleep = (s: number) => new Promise<void>((r) => { setTimeout(() => r(), s * 1000) })
export default sleep
