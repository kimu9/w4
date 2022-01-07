const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = 'その日は、とても暑かった。 so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const storyText = '気温華氏40度で外は寒かったが、:insertx:は出かけた。:inserty:に向かっている途中、:insertz:。体重110ポンドの :insertx:は楽しそうにスキップをし始め、Bobは驚いた。しかし、:inserty:に来るといつものことだったので周りは驚いた。';
const insertX = ['お父さん', 'おじいちゃん', 'おばあちゃん'];
const insertY = ['ディズニーランド', '川', 'アメリカ'];
const insertZ = ['雪が降っていた', '霧がかかっていた', '雨が降っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("ja").checked) {
    const weight = `${Math.round(110*0.453592)}kg`;
    const temperature =  `摂氏${Math.round((40-32) * 5 / 9)} `;
    newStory = newStory.replace('華氏40', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
