// ! Solution for last session

const delay = (timeDelay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Gets called after ${timeDelay} sec`);
      }, timeDelay * 1000);
    });
  };
  
  const getRandom = () => {
    const num = Math.ceil(Math.random() * 10);
    return num;
  };
  
  async function test() {
    const resp = getRandom();
    const ans = await delay(resp);
    console.log(ans);
  }
  
  test();

  console.log('23' - '2');