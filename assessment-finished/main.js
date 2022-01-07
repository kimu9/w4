const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = 'その日は、とても暑かった。 so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const storyText = '気温華氏40度で外は寒かった。:insertx:は出かけた。:inserty:に着いた。:insertz:。体重300ポンドの :insertx:は驚いたが、Bobは驚かなかった。';
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
  newStory = newStory.replace(':inserty:',zItem);
  newStory = newStory.replace(':insertz:',yItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("us").checked) {
    const weight = `${Math.round(300*0.0714286)} kg`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)} `;
    newStory = newStory.replace('華氏40', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
