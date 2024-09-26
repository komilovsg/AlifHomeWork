class InstagramStory {
  static totalStories = 0;
  #title;
  #views = 0;

  constructor(title) {
    this.#title = title;
    InstagramStory.totalStories++;
  }

  addView() {
    this.#views++;
  }

  getInfo() {
    return {
      title: this.#title,
      views: this.#views,
    };
  }

  static getTotalStories() {
    return InstagramStory.totalStories;
  }
}

const story1 = new InstagramStory("Мой первый пример работы КР");
story1.addView();
story1.addView();
story1.addView();
story1.addView();

const story2 = new InstagramStory("Мой второй пример работы КР");

console.log(story1.getInfo());
console.log(story2.getInfo());

console.log(InstagramStory.getTotalStories());
