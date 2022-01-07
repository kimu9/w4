const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = 'その日は、とても暑かった。 so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const storyText = '気温摂氏-1で外は寒かった。:insertx:は出かけた。:inserty:に着いた。:insertz:。体重50kgの :insertx: は驚いたが、津田は驚かなかった。 :inserty: ではよくあることだった。';
const insertX = ['スヌーピー', 'ミッキーマウス', 'サンタクロース'];
const insertY = ['ディズニーランド', '千駄ヶ谷', '津田塾大学'];
const insertZ = ['雪が降っていた', '混雑していた', '雨が降っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('津田', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
