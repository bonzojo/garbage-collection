const doomPyramid = () => {
    return new Promise((resolve, reject) => {
    console.log(`I am the top of the pyramid!`)
    setTimeout(() => {
      console.log('Man, buying that marketing idea was pure gold. I wonder who sold the idea to the man who sold it me?');
      setTimeout(() => {
        console.log('Well, I bought myself a great business venture. Now, if i get the mafia involved, i will be richer!');
        setTimeout(() => {
          console.log('So Tommy sold the idea to thirty more other people than me, does that mean he is thirty times better off?');
          setTimeout(() => {
            console.log('I heard one lady bought a thousand bottles.');
            resolve('STOP! YOu aRE iN a PyrAmid SCheME!');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
  };
  
  module.exports = doomPyramid;