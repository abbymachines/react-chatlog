import '../App.css';

const HeartCounter = () => {
  const printMessage = (name) => {
    console.log(`Hello ${name}?? can\'t a program count hearts in peace??`);
    console.log('event details:', name);
  };

  return (
    <div>
      <br></br>
      <p className='heartWidget'>
        shout out to a certain amount of likes clicked
      </p>
      <button onClick={() => printMessage('Bob')}>hello!</button>
    </div>
  );
};

export default HeartCounter;