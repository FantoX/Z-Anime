<div align="center">
  <a href="#">
    <img src="https://graph.org/file/f04fb6b4cd450eaf3ec60.jpg" alt="Logo">
  </a>

  <h1 align="center">Z-Anime</h1>

  <p align="center">
    <h3>An unoffitial <a href="https://sanji.to">Zoro.to </a>scraper NPM package </h3>
    <a href="#get-trending-anime-list">View Code Example</a>
    ·
    <a href="https://github.com/FantoX/Z-Anime/issues">Report a Bug</a>
    ·
    <a href="https://github.com/FantoX/Z-Anime/issues">Request a Feature</a>
    <p align="center">
      <br /> 
      <br />
      <a  href="https://www.codefactor.io/repository/github/FantoX/z-anime"><img width="130px" src="https://www.codefactor.io/repository/github/FantoX/z-anime/badge" alt="CodeFactor" /></a> <br /> <br />
    <a href="https://www.npmjs.com/package/z-anime"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="140px"> </a> <br /> <br />
        <a href="https://www.buymeacoffee.com/FantoX"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=FantoX&button_colour=ff0059&font_colour=FFFFFF&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>


  </p>
</div>


# About Z-Anime

Sometimes while creating and **anime information** website or **anime news website**, we require some data so this NPM pacakge will help you fetch data from <a href="sanji.to">zoro.to </a> and return as a **JSON** with the power of web scraping.

**Features:**
- [x] Lite weight, fast ( Execution time: 0.05ms - 0.5s average ) and realtime scraping.
- [x] Written on simple **ES5** JavaScript which ensures compatibility.
- [x] Open Source MIT license.

**Advantages:**
- [x] Saves your time and money of creating a whole anime database yourself.
- [x] Requirs no additional configuration from user's end.
- [x] Contains all featues of <a href="https://sanji.to">zoro.to </a> website.

**Limitations:**
- [ ] No anime video **play/download** feature to avoid IP ban.
- [ ] Can take upto **1.25s** in certain functions to preform some heavy scraping ( Ex: Anime details ).
- [x] Let me know if you found anything else.


<a name="table-of-contents"></a>

# Table of Contents

<ol>
  <li>Getting started</li>
  <ul>
    <li><a href="#installation">Installation</a></li> <br />
  </ul>
  <li>Usage</li>
  <ul>
    <li><a href="#get-trending-anime-list">Get Trending Animes List</a></li>
    <li><a href="#get-spotlight-anime-list">Get Spotlight Animes List</a></li>
    <li><a href="#get-recently-updated-anime-list">Get Recently Updated Animes List</a></li>
    <li><a href="#get-recently-added-anime-list">Get Recently Added Animes List</a></li>
    <li><a href="#get-top-airing-anime-list">Get Currently Airing Animes List</a></li>
    <li><a href="#get-most-popular-anime-list">Get Most Popular Animes List</a></li>
    <li><a href="#get-most-favourite-anime-list">Get Most Favourite Animes List</a></li>
    <li><a href="#get-completed-anime-list">Get Completed Animes List</a></li>
    <li><a href="#search-any-genere">Search an Anime Genre</a></li>
    <li><a href="#search-any-anime">Search an Anime</a></li>
    <li><a href="#get-full-details-of-any-anime">Get Full Details of any Anime</a></li>
    <li><a href="#get-movies-list">Get Anime Movies List</a></li>
    <li><a href="#get-ona-list">Get ONA Animes List</a></li>
    <li><a href="#get-ova-list">Get OVA Animes List</a></li>
    <li><a href="#get-tv-list">Get TV Animes List</a></li>
    <li><a href="#get-specials-list">Get Specials Animes List</a></li>
    <li><a href="#get-dubbed-anime-list">Get Dubbed Animes List</a></li>
    <li><a href="#get-subbed-anime-list">Get Subbed Animes List</a></li> <br />
</ul>
  <li><a href="#making-of-z-anime">Making of Z-Anime</a></li> <br />
  <li><a href="#contributions">Contributions</a></li> <br />
</ol>


<!-- GETTING STARTED -->
# Getting Started

This is how you can setup Z-Anime.

### Installation

Using NPM:

```sh
npm install z-anime
```

Using YARN:

```sh
yarn add z-anime
```


## Usage

### Get Trending anime list:

* Use `trending()` function to get top 10 trending anime list of Zoro.to.

Using Anoymous function

```JS
const anime = require("z-anime");

(async () => {
  
  const trending = await anime.trending(); // It will return top 10 trending anime.
  
  console.log(trending);
})();
```

### The Above function is equivalent to below one

Using Named function

```JS
const anime = require("z-anime");

async function getTrending(){
  
  const trending = await anime.trending(); // It will return top 10 trending anime.
  
  console.log(trending);
});

getTrending()
```

### Output:

<details>
  <summary>View Output</summary>

<br />

  ```js
  [
  {
    index: '1',
    title: 'One Piece',
    image: 'https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg',
    url: 'https://sanji.to/one-piece-100'
  },
  {
    index: '2',
    title: 'Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc',
    image: 'https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png',
    url: 'https://sanji.to/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056'
  },
  {
    index: '3',
    title: 'My Star',
    image: 'https://img.zorores.com/_r/300x400/100/99/59/995928d6858977d66f7da57e0e0af08a/995928d6858977d66f7da57e0e0af08a.jpg',
    url: 'https://sanji.to/my-star-18330'
  },
  {
    index: '4',
    title: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
    image: 'https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg',
    url: 'https://sanji.to/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too-18343'
  },
  {
    index: '5',
    title: 'Mashle: Magic and Muscles',
    image: 'https://img.zorores.com/_r/300x400/100/9f/af/9faf29fb396c436d19ed83fa82a31e2f/9faf29fb396c436d19ed83fa82a31e2f.jpg',
    url: 'https://sanji.to/mashle-magic-and-muscles-18339'
  },
  {
    index: '6',
    title: "Hell's Paradise",
    image: 'https://img.zorores.com/_r/300x400/100/5f/d0/5fd0a7d4f0e1a9088c85bc0dcb2f176a/5fd0a7d4f0e1a9088c85bc0dcb2f176a.png',
    url: 'https://sanji.to/hells-paradise-18332'
  },
  {
    index: '7',
    title: 'Dr. Stone: New World',
    image: 'https://img.zorores.com/_r/300x400/100/0c/ab/0cab1ee2bbe1a4def0790121df2c1fc7/0cab1ee2bbe1a4def0790121df2c1fc7.jpg',
    url: 'https://sanji.to/dr-stone-new-world-17725'
  },
  {
    index: '8',
    title: 'Blue Lock',
    image: 'https://img.zorores.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg',
    url: 'https://sanji.to/blue-lock-17889'
  },
  {
    index: '9',
    title: 'My Hero Academia Season 6',
    image: 'https://img.zorores.com/_r/300x400/100/20/b7/20b7580c1abdf45a6eaf4826fc9fdf33/20b7580c1abdf45a6eaf4826fc9fdf33.jpg',
    url: 'https://sanji.to/my-hero-academia-season-6-18154'
  },
  {
    index: '10',
    title: 'Tokyo Revengers: Christmas Showdown',
    image: 'https://img.zorores.com/_r/300x400/100/fb/66/fb663be9a427cc4c9556a5a124b060e8/fb663be9a427cc4c9556a5a124b060e8.jpg',
    url: 'https://sanji.to/tokyo-revengers-christmas-showdown-18244'
  }
]
  ```

<br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Get Spotlight anime list:

* Use `spotlight()` function to get top 12 spotlight anime list of Zoro.to.

```JS
const anime = require("z-anime");

(async () => {
  
  const spotlight = await anime.spotlight();  // It will return top 12 spotlight anime.
  
  console.log(spotlight);
})();
```

### Output:

<details>
  <summary>View Output</summary>

  <br />

  ```js
  [
  {
    index: '1',
    image: 'https://img.zorores.com/_r/1366x768/100/69/dd/69dd49d8ad5033c8f649b67e9c3bfef9/69dd49d8ad5033c8f649b67e9c3bfef9.jpg',
    title: 'Skip and Loafer',
    release: 'Apr 4, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '12',
    episodes: '12',
    description: 'In order to pursue her dream of bringing positive changes to Japan, Mitsumi Iwakura leaves her countryside town to attend a prestigious high school in the hustle and bustle of Tokyo. As she has already mapped a clear life plan, she has absolute confidence that there will be zero mishaps from then onwards.Despite her ambitious promise, the country girl ends up running late on the first day when she gets lost on her way to school. Fortunately, she meets a fellow first-year student, Sousuke Shima, who is in the same situation and offers to go with her. They eventually make it to school, but the misfortunes do not end there, as Mitsumi leaves an unfavorable first impression in front of her classmates.',
    url: 'https://sanji.to/watch/skip-and-loafer-18351'
  },
  {
    index: '2',
    image: 'https://img.zorores.com/_r/1366x768/100/ff/b6/ffb6981af9cacd38b190c2d878a4405a/ffb6981af9cacd38b190c2d878a4405a.jpg',
    title: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
    release: 'Apr 7, 2023',
    duration: '24m',
    quality: 'HD',
    cc: '12',
    episodes: '13',
    description: 'All his life, Yuuya Tenjou has been the subject of resentment and contempt from everyone around him, even from his parents. To make matters worse, his grandfather—the only person who ever showed him affection—suddenly dies, leaving Yuuya truly alone.Despite facing many adversities, Yuuya does what he can to offer kindness to those who need it—but even the most good-natured people can only tolerate so much abuse. Just when he reaches his breaking point, a flicker of hope appears in the form of a hidden door in his bathroom.',
    url: 'https://sanji.to/watch/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too-18343'
  },
  {
    index: '3',
    image: 'https://img.zorores.com/_r/1366x768/100/e4/05/e4055651560b12f4f735657be1dc001f/e4055651560b12f4f735657be1dc001f.jpg',
    title: "Hell's Paradise",
    release: 'Apr 1, 2023',
    duration: '22m',
    quality: 'HD',
    cc: '11',
    episodes: '13',
    description: "Gabimaru the Hollow, a ninja of Iwagakure Village known for being cold and emotionless, was set up by his fellow ninja and is now on death row. Tired of killing and betrayal, he wants to die. However, no method of execution works on him because as much as the seemingly apathetic Gabimaru refuses to admit it, he does have a reason to live. He wants to return to his wife, who was the reason why he softened up and failed to be an effective assassin. Thus, he refuses to die.Asaemon the Decapitator, a famous executioner, sees this and has a proposal for the ninja. He wants Gabimaru to join an expedition to an island south of Japan in search of the elixir of life in exchange for a full pardon by the Shogunate. However, this island isn't a normal island: it's believed to be Paradise.",
    url: 'https://sanji.to/watch/hells-paradise-18332'
  },
  {
    index: '4',
    image: 'https://img.zorores.com/_r/1366x768/100/76/9a/769aa036cdb4a575b43b44ef2ad625bf/769aa036cdb4a575b43b44ef2ad625bf.jpg',
    title: 'Edens Zero 2nd Season',
    release: 'Mar 11, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '12',
    episodes: 'Not declared yet',
    description: "Now in possession of the Edens Zero, Shiki Granbell has gathered the Four Shining Stars. With the help of his new friends, Shiki will be able to breach Dragonfall—the border of the Sakura Cosmos swarming with mechanical dragons. Once that is achieved, he can continue his quest to find the goddess Mother.Before the Edens Zero crew can advance their journey, they notice a mysterious warship following them. Upon learning that the ship—the Belial Gore—belongs to Drakken Joe, Shiki and his crew attempt to infiltrate it, intent on figuring out why the Dark Alchemist is after them. In the process, the Edens Zero is taken hostage by Drakken's subordinates.",
    url: 'https://sanji.to/watch/edens-zero-2nd-season-18331'
  },
  {
    index: '5',
    image: 'https://img.zorores.com/_r/1366x768/100/b7/da/b7da3cbb4e82c692f724b73848326dca/b7da3cbb4e82c692f724b73848326dca.jpg',
    title: 'Loving Yamada at Lv999',
    release: 'Apr 2, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '12',
    episodes: '13',
    description: "After her boyfriend breaks up with her for another girl, college student Akane Kinoshita wrestles with a broken heart and the memories he left behind. Loading up Forest of Savior, the MMO they used to play together, she forms a plan to get back at her ex-boyfriend through an in-person event for the game. In the process, she runs into someone unexpected: Akito Yamada, a gaming legend who just happens to be her guildmate.Desperate for support, Akane ropes the asocial Yamada into helping with her scheme and lending her a shoulder to cry on. The differences between Akane and Yamada soon become apparent as they spend time together, yet they cannot help but notice each other's inner qualities. As the two gain more experience with one another in and out of the game, their tentative acquaintance may level up in a way neither expects.",
    url: 'https://sanji.to/watch/loving-yamada-at-lv999-18341'
  },
  {
    index: '6',
    image: 'https://img.zorores.com/_r/1366x768/100/be/85/be855285814752aa2def6fcaba6f3269/be855285814752aa2def6fcaba6f3269.jpg',
    title: 'Tonikawa: Over The Moon For You: 2nd Season',
    release: 'Apr 8, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '11',
    episodes: 'Not declared yet',
    description: "In the wake of their first home burning down, Nasa and Tsukasa Yuzaki are seeking temporary shelter at the Arisugawas' bathhouse. Though they have only been married for a short time, their relationship has only become sweeter by the day. Nasa is determined to spend as much time with his wife as possible, basking in the happiness of their marriage.The newlyweds find new ways to explore their relationship. From adopting a cat, going to an amusement park, and even watching an impromptu romantic comedy featuring Nasa's former teacher, every day is a new experience. But while Tsukasa continues to meet the people in Nasa's life, Nasa has yet to meet more of Tsukasa's family. Though they appear to be the picture-perfect couple to everyone around them, Nasa begins to wonder if he will ever learn more about his wife's mysterious past.",
    url: 'https://sanji.to/watch/tonikawa-over-the-moon-for-you-2nd-season-18226'
  },
  {
    index: '7',
    image: 'https://img.zorores.com/_r/1366x768/100/7c/d5/7cd514ee5521d04d45acfcdd0721f2f2/7cd514ee5521d04d45acfcdd0721f2f2.jpg',
    title: 'Black Clover: Sword of the Wizard King',
    release: 'Jun 16, 2023',
    duration: '1h 50m',
    quality: 'HD',
    cc: '1',
    episodes: 'Not declared yet',
    description: 'As a lionhearted boy who can’t wield magic strives for the title of Wizard King, four banished Wizard Kings of yore return to crush the Clover Kingdom.',
    url: 'https://sanji.to/watch/black-clover-sword-of-the-wizard-king-17752'
  },
  {
    index: '8',
    image: 'https://img.zorores.com/_r/1366x768/100/57/f8/57f8283354fe92f23fc216a53e7368d0/57f8283354fe92f23fc216a53e7368d0.jpg',
    title: 'The Legendary Hero Is Dead!',
    release: 'Apr 7, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '11',
    episodes: '12',
    description: "Far to the north of the world lies Hell's Gate, a portal formerly used by the Demon Lord to invade the human realm. Thanks to the legendary hero Shion Bladearts, wielder of Excalibur, and his loyal band of companions, the Gate was sealed off and the demonic threat was vanquished.  Unfortunately, the seal was incomplete and has begun to weaken, allowing the demons to once again begin their attack. Worried about the safety of his village, selfish and perverted farmer Touka Scott dig pitfalls to defend against the demons. But fear not, for Shion is on his way to reseal Hell's Gate and save humanity!  Or at least he was, because the legendary hero is dead, having fallen into one of the pitfalls Touka dug. Luckily, dealing with the dead is the specialty of necromancer Anri Haynesworth. While she can't revive him, Anri can at least salvage their quest by forcing Touka's soul into Shion's rotting body and dragging him along to Hell's Gate in Shion's place. Not wanting to be left behind, Touka's childhood friend Yuna Yunis tags along. Together, the three of them set out as what just might be the most unsuitable party to ever try to save the world!",
    url: 'https://sanji.to/watch/the-legendary-hero-is-dead-18354'
  },
  {
    index: '9',
    image: 'https://img.zorores.com/_r/1366x768/100/ba/a2/baa2cf51574e886b03140a0c023dc849/baa2cf51574e886b03140a0c023dc849.jpg',
    title: "The Ancient Magus' Bride Season 2",
    release: 'Apr 6, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '11',
    episodes: '12',
    description: "Apprentice mage Chise Hatori is invited to enroll at the College, a prestigious learning institution for sorcerers, to examine and look for a way to remove the curses she bears. Despite her groom Elias Ainsworth's reluctance, Chise accepts the proposal, as she believes attending the school might help her minimize her self-sacrificing tendencies.From the get-go, Chise grabs the attention of her classmates and professors alike, who have never seen a mage in action before. However, there is a sinister plot brewing behind the College's back, and the young mage will have to determine who is friend or foe in order to put a stop to it.",
    url: 'https://sanji.to/watch/the-ancient-magus-bride-season-2-18338'
  },
  {
    index: '10',
    image: 'https://img.zorores.com/_r/1366x768/100/56/cc/56cca40be898cbecc462ea9987870942/56cca40be898cbecc462ea9987870942.jpg',
    title: 'Dr. Stone: New World',
    release: 'Apr 6, 2023',
    duration: '23m',
    quality: 'HD',
    cc: '11',
    episodes: '11',
    description: 'With the ambitious Ryuusui Nanami on board, Senkuu Ishigami and his team are almost ready to sail the seas and reach the other side of the world—where the bizarre green light that petrified humanity originated. Thanks to the revival of a skillful chef, enough food is being prepared for the entire crew, and the incredible reinvention of the GPS promises to ensure safety on the open sea.Preparations for the upcoming journey progress swimmingly until Senkuu receives an eerie message from a mysterious source. More driven than ever, the scientist sets out to explore the new world and discover what it can offer for his scientific cause. Though the uncharted territories may hide unkind surprises, Senkuu, with a little help from science, is ready to take on any challenge.',
    url: 'https://sanji.to/watch/dr-stone-new-world-17725'
  },
  {
    index: '11',
    image: 'https://img.zorores.com/_r/1366x768/100/40/22/402294e6873d87b6c81d42902a13d07c/402294e6873d87b6c81d42902a13d07c.jpg',
    title: 'The Tunnel to Summer, the Exit of Goodbye',
    release: 'Sep 9, 2022',
    duration: '1h 23m',
    quality: 'HD',
    cc: '1',
    episodes: 'Not declared yet',
    description: "Kaoru Tono heard a rumor: The laws of space and time mean nothing to the Urashima Tunnel. If you find it, walk through and you'll find your heart's desire on the other side...in exchange for years of your own life. One night, Kaoru just so happens to find himself standing in front of a tunnel that looks suspiciously like the one the rumor describes. He finds himself thinking of Karen, the sister he lost in an accident five years ago.  To Kaoru's surprise, he's been followed by the new transfer student Anzu Hanashiro, who promises to help him experiment with the mysterious tunnel—but what does she want from Kaoru in exchange? And what will he have left to give, after the tunnel's done with him?",
    url: 'https://sanji.to/watch/the-tunnel-to-summer-the-exit-of-goodbye-18393'
  },
  {
    index: '12',
    image: 'https://img.zorores.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg',
    title: 'Bleach',
    release: 'Oct 5, 2004',
    duration: '24m',
    quality: 'HD',
    cc: '366',
    episodes: '366',
    description: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.",
    url: 'https://sanji.to/watch/bleach-806'
  }
]
  ```

  <br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Get Recently Updated anime list:

* Use `updated()` function to get Recently Updated anime list of page 1 of Zoro.to.
* You can get a particular page number of Recently Updated by using `updated(3)` ( To get Recently Updated page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.updated(); // It will return Recently Updated anime page 1
  
  const data2 = await anime.updated(3); // It will return Recently Updated anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

### Output:

<details>
  <summary>View Output</summary>

  <br />

  ```js
[
  {
    title: 'The [email protected] Cinderella Girls: U149',
    jname: 'The IDOLM@STER Cinderella Girls: U149',
    image: 'https://img.zorores.com/_r/300x400/100/d9/60/d960cee0e6c44f9071f130ebee6ba688/d960cee0e6c44f9071f130ebee6ba688.jpg',
    url: 'https://sanji.to/the-idolm-at-ster-cinderella-girls-u149-18372',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'KonoSuba: An Explosion on This Wonderful World!',
    jname: 'Kono Subarashii Sekai ni Bakuen wo!',
    image: 'https://img.zorores.com/_r/300x400/100/68/74/6874272e4cb78f1d10ee14a864ce7dbb/6874272e4cb78f1d10ee14a864ce7dbb.png',
    url: 'https://sanji.to/konosuba-an-explosion-on-this-wonderful-world-18337',
    age: 'All',
    sub: '12',
    dub: '10',
    totalepisodes: '12'
  },
  {
    title: 'Sacrificial Princess and the King of Beasts',
    jname: 'Niehime to Kemono no Ou',
    image: 'https://img.zorores.com/_r/300x400/100/a2/b2/a2b269f282aa5d2f0314abe11e8a9e06/a2b269f282aa5d2f0314abe11e8a9e06.png',
    url: 'https://sanji.to/sacrificial-princess-and-the-king-of-beasts-17424',
    age: 'All',
    sub: '10',
    dub: '8',
    totalepisodes: '24'
  },
  {
    title: 'Nights with a Cat',
    jname: 'Yoru wa Neko to Issho Season 2',
    image: 'https://img.zorores.com/_r/300x400/100/00/1a/001a4c3855f5d54209f7ba8ad8cde9aa/001a4c3855f5d54209f7ba8ad8cde9aa.jpg',
    url: 'https://sanji.to/nights-with-a-cat-18334',
    age: 'All',
    sub: '14',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'My Star',
    jname: '"Oshi no Ko"',
    image: 'https://img.zorores.com/_r/300x400/100/99/59/995928d6858977d66f7da57e0e0af08a/995928d6858977d66f7da57e0e0af08a.jpg',
    url: 'https://sanji.to/my-star-18330',
    age: 'All',
    sub: '10',
    dub: '5',
    totalepisodes: '11'
  },
  {
    title: "Sorcerous Stabber Orphen -Doom of Dragon's Sanctuary-",
    jname: 'Majutsushi Orphen Hagure Tabi: Seiiki-hen',
    image: 'https://img.zorores.com/_r/300x400/100/23/c7/23c7c58700157bf6d8152e8e2214b3a7/23c7c58700157bf6d8152e8e2214b3a7.jpg',
    url: 'https://sanji.to/sorcerous-stabber-orphen-doom-of-dragons-sanctuary-18374',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: "Aiyou's Secret Room",
    jname: 'Aiyou de Mishi',
    image: 'https://img.zorores.com/_r/300x400/100/28/fe/28fe7068bf220d2abd0176fcc550011d/28fe7068bf220d2abd0176fcc550011d.png',
    url: 'https://sanji.to/aiyous-secret-room-18272',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '16'
  },
  {
    title: 'Magical Princess Minky Momo',
    jname: 'Mahou no Princess Minky Momo',
    image: 'https://img.zorores.com/_r/300x400/100/33/88/3388797fcea71372f852bb827ea1cbdd/3388797fcea71372f852bb827ea1cbdd.jpg',
    url: 'https://sanji.to/magical-princess-minky-momo-4566',
    age: 'All',
    sub: '18',
    dub: 'No dubbing yet',
    totalepisodes: '63'
  },
  {
    title: 'Tokyo Mew Mew New 2nd Season',
    jname: 'Tokyo Mew Mew New 2nd Season',
    image: 'https://img.zorores.com/_r/300x400/100/de/17/de17a6cac30ab202cd1a388de5ebfafa/de17a6cac30ab202cd1a388de5ebfafa.jpg',
    url: 'https://sanji.to/tokyo-mew-mew-new-2nd-season-18368',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'Skip and Loafer',
    jname: 'Skip to Loafer',
    image: 'https://img.zorores.com/_r/300x400/100/f1/21/f121f498b3be50b194236f055c97c6df/f121f498b3be50b194236f055c97c6df.jpg',
    url: 'https://sanji.to/skip-and-loafer-18351',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: "Kubo Won't Let Me Be Invisible",
    jname: 'Kubo-san wa Mob wo Yurusanai',
    image: 'https://img.zorores.com/_r/300x400/100/87/b0/87b0703b2059dddac2e76d219257bc96/87b0703b2059dddac2e76d219257bc96.jpg',
    url: 'https://sanji.to/kubo-wont-let-me-be-invisible-18254',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'Yuu Gi Ou: Go Rush!!',
    jname: 'Yu☆Gi☆Oh!: Go Rush!!',
    image: 'https://img.zorores.com/_r/300x400/100/92/70/92701d4864595e6cd3ce3c4effa2c198/92701d4864595e6cd3ce3c4effa2c198.jpg',
    url: 'https://sanji.to/yuu-gi-ou-go-rush-18000',
    age: 'All',
    sub: '63',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'A Will Eternal',
    jname: 'Yi Nian Yong Heng: Chuan Cheng Pian',
    image: 'https://img.zorores.com/_r/300x400/100/25/e3/25e3a9b167fa92be9196d32728f6d391/25e3a9b167fa92be9196d32728f6d391.jpg',
    url: 'https://sanji.to/a-will-eternal-18110',
    age: 'All',
    sub: '41',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Kizuna no Allele',
    jname: 'Kizuna no Allele',
    image: 'https://img.zorores.com/_r/300x400/100/ef/58/ef589599341efbee4e87edd81f6648ae/ef589599341efbee4e87edd81f6648ae.jpg',
    url: 'https://sanji.to/kizuna-no-allele-18370',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
    jname: 'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
    image: 'https://img.zorores.com/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg',
    url: 'https://sanji.to/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too-18343',
    age: 'All',
    sub: '12',
    dub: '9',
    totalepisodes: '13'
  },
  {
    title: 'Vinland Saga: 2nd Season',
    jname: 'Vinland Saga Season 2',
    image: 'https://img.zorores.com/_r/300x400/100/17/3e/173e4c5db060f057506138057261b259/173e4c5db060f057506138057261b259.jpg',
    url: 'https://sanji.to/vinland-saga-2nd-season-18239',
    age: '18+',
    sub: '24',
    dub: '22',
    totalepisodes: '24'
  },
  {
    title: 'In Another World With My Smartphone 2',
    jname: 'Isekai wa Smartphone to Tomo ni. 2',
    image: 'https://img.zorores.com/_r/300x400/100/ba/cb/bacb7124d070a26097c77601250a205e/bacb7124d070a26097c77601250a205e.jpg',
    url: 'https://sanji.to/in-another-world-with-my-smartphone-2-18342',
    age: 'All',
    sub: '12',
    dub: '10',
    totalepisodes: '12'
  },
  {
    title: 'Insomniacs After School',
    jname: 'Kimi wa Houkago Insomnia',
    image: 'https://img.zorores.com/_r/300x400/100/20/2a/202a4c434af567174dc7683de096a96c/202a4c434af567174dc7683de096a96c.jpg',
    url: 'https://sanji.to/insomniacs-after-school-18344',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: '13'
  },
  {
    title: 'Dead Mount Death Play',
    jname: 'Dead Mount Death Play',
    image: 'https://img.zorores.com/_r/300x400/100/3a/06/3a06250cf428b5e830f2fee15b96f1a4/3a06250cf428b5e830f2fee15b96f1a4.jpg',
    url: 'https://sanji.to/dead-mount-death-play-18352',
    age: 'All',
    sub: '11',
    dub: '9',
    totalepisodes: '12'
  },
  {
    title: 'The Blue Orchestra',
    jname: 'Ao no Orchestra',
    image: 'https://img.zorores.com/_r/300x400/100/11/63/1163cc1867f3bf59b4ddb65f3c937330/1163cc1867f3bf59b4ddb65f3c937330.jpg',
    url: 'https://sanji.to/the-blue-orchestra-18359',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Golden Kamuy Season 4',
    jname: 'Golden Kamuy 4th Season',
    image: 'https://img.zorores.com/_r/300x400/100/a5/82/a5824f3734dc9833fd364019d9c96107/a5824f3734dc9833fd364019d9c96107.jpg',
    url: 'https://sanji.to/golden-kamuy-season-4-18162',
    age: '18+',
    sub: '12',
    dub: '10',
    totalepisodes: '13'
  },
  {
    title: 'Kuma Kuma Kuma Bear Punch!',
    jname: 'Kuma Kuma Kuma Bear 2nd Season',
    image: 'https://img.zorores.com/_r/300x400/100/0d/22/0d223280706d8f5d2f556c7951c5bf4b/0d223280706d8f5d2f556c7951c5bf4b.jpg',
    url: 'https://sanji.to/kuma-kuma-kuma-bear-punch-17374',
    age: 'All',
    sub: '12',
    dub: '10',
    totalepisodes: '12'
  },
  {
    title: "The Reason Why Raeliana Ended up at the Duke's Mansion",
    jname: 'Kanojo ga Koushaku-tei ni Itta Riyuu',
    image: 'https://img.zorores.com/_r/300x400/100/bf/3c/bf3c1f30c2a3dd8ed26cd54c11992cd3/bf3c1f30c2a3dd8ed26cd54c11992cd3.jpg',
    url: 'https://sanji.to/the-reason-why-raeliana-ended-up-at-the-dukes-mansion-18350',
    age: 'All',
    sub: '11',
    dub: '11',
    totalepisodes: '12'
  },
  {
    title: 'Alice Gear Aegis Expansion',
    jname: 'Alice Gear Aegis Expansion',
    image: 'https://img.zorores.com/_r/300x400/100/90/a1/90a1dbcb03b97c209fd2b3e8fdeee1af/90a1dbcb03b97c209fd2b3e8fdeee1af.jpg',
    url: 'https://sanji.to/alice-gear-aegis-expansion-18373',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'The Ravages of Time',
    jname: 'Huo Feng Liao Yuan',
    image: 'https://img.zorores.com/_r/300x400/100/98/1b/981b2e2d44935f34e7412a396d5c843b/981b2e2d44935f34e7412a396d5c843b.jpg',
    url: 'https://sanji.to/the-ravages-of-time-15735',
    age: 'All',
    sub: '3',
    dub: 'No dubbing yet',
    totalepisodes: '16'
  },
  {
    title: 'Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc',
    jname: 'Kimetsu no Yaiba: Katanakaji no Sato-hen',
    image: 'https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png',
    url: 'https://sanji.to/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056',
    age: '18+',
    sub: '11',
    dub: '4',
    totalepisodes: '11'
  },
  {
    title: 'Stella of the Theater: World Dai Star',
    jname: 'World Dai Star',
    image: 'https://img.zorores.com/_r/300x400/100/30/7f/307f8d0513c052c3e74418eabf631dd6/307f8d0513c052c3e74418eabf631dd6.jpg',
    url: 'https://sanji.to/stella-of-the-theater-world-dai-star-18375',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'Tsurune Movie: Hajimari no Issha',
    jname: 'Tsurune Movie: Hajimari no Issha',
    image: 'https://img.zorores.com/_r/300x400/100/f4/0c/f40cf1a43b0d1eb573720c36cb57e3ad/f40cf1a43b0d1eb573720c36cb57e3ad.jpg',
    url: 'https://sanji.to/tsurune-movie-hajimari-no-issha-18411',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mirage Queen Aime Cirque',
    jname: 'Kaitou Queen wa Circus ga Osuki',
    image: 'https://img.zorores.com/_r/300x400/100/81/32/8132ddcf65a09a138897d003eaa27d2d/8132ddcf65a09a138897d003eaa27d2d.jpg',
    url: 'https://sanji.to/mirage-queen-aime-cirque-18020',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'My Clueless First Friend',
    jname: 'Jijou wo Shiranai Tenkousei ga Guigui Kuru.',
    image: 'https://img.zorores.com/_r/300x400/100/9b/5b/9b5bd2a09de9cc2d0eb31c9b4d0c2ac0/9b5bd2a09de9cc2d0eb31c9b4d0c2ac0.jpg',
    url: 'https://sanji.to/my-clueless-first-friend-18365',
    age: 'All',
    sub: '12',
    dub: '10',
    totalepisodes: '13'
  },
  {
    title: "The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far",
    jname: 'Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito',
    image: 'https://img.zorores.com/_r/300x400/100/20/39/20398dadb590c2c769d1eed77d671677/20398dadb590c2c769d1eed77d671677.jpg',
    url: 'https://sanji.to/the-aristocrats-otherworldly-adventure-serving-gods-who-go-too-far-18355',
    age: 'All',
    sub: '12',
    dub: '10',
    totalepisodes: '12'
  },
  {
    title: 'My Home Hero',
    jname: 'My Home Hero',
    image: 'https://img.zorores.com/_r/300x400/100/ee/90/ee90286e090d5e5956ea7ef0b4e86d45/ee90286e090d5e5956ea7ef0b4e86d45.jpg',
    url: 'https://sanji.to/my-home-hero-18348',
    age: '18+',
    sub: '12',
    dub: '10',
    totalepisodes: '12'
  },
  {
    title: 'Mobile Suit Gundam: The Witch from Mercury Season 2',
    jname: 'Kidou Senshi Gundam: Suisei no Majo Season 2',
    image: 'https://img.zorores.com/_r/300x400/100/29/02/2902c9f658d71953c9f48836b97de08c/2902c9f658d71953c9f48836b97de08c.jpg',
    url: 'https://sanji.to/mobile-suit-gundam-the-witch-from-mercury-season-2-18353',
    age: '18+',
    sub: '10',
    dub: '7',
    totalepisodes: '12'
  },
  {
    title: 'One Piece - Wano Kuni SP',
    jname: 'One Piece - Wano Kuni SP',
    image: 'https://img.zorores.com/_r/300x400/100/fd/75/fd758a025129d9fb3806b27d3e5f428b/fd758a025129d9fb3806b27d3e5f428b.jpg',
    url: 'https://sanji.to/one-piece-wano-kuni-sp-18217',
    age: 'All',
    sub: '8',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Hirogaru Sky! Precure',
    jname: 'Hirogaru Sky! Precure',
    image: 'https://img.zorores.com/_r/300x400/100/ef/e1/efe14cc95072a24d780ea717b467019b/efe14cc95072a24d780ea717b467019b.jpg',
    url: 'https://sanji.to/hirogaru-sky-precure-18320',
    age: 'All',
    sub: '20',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Summoned to Another World for a Second Time',
    jname: 'Isekai Shoukan wa Nidome desu',
    image: 'https://img.zorores.com/_r/300x400/100/98/fc/98fc1ac81870a0920af1f49fdcc1014a/98fc1ac81870a0920af1f49fdcc1014a.jpg',
    url: 'https://sanji.to/summoned-to-another-world-for-a-second-time-18346',
    age: 'All',
    sub: '11',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'The Dangers in My Heart',
    jname: 'Boku no Kokoro no Yabai Yatsu',
    image: 'https://img.zorores.com/_r/300x400/100/4e/8a/4e8ab848c929cecbce30c04ef43d955e/4e8ab848c929cecbce30c04ef43d955e.jpg',
    url: 'https://sanji.to/the-dangers-in-my-heart-18345',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '12'
  },
  {
    title: 'A Galaxy Next Door',
    jname: 'Otonari ni Ginga',
    image: 'https://img.zorores.com/_r/300x400/100/e6/35/e6350e5f8680182581663b8437c84de1/e6350e5f8680182581663b8437c84de1.jpg',
    url: 'https://sanji.to/a-galaxy-next-door-18347',
    age: 'All',
    sub: '11',
    dub: '9',
    totalepisodes: '12'
  },
  {
    title: 'Loving Yamada at Lv999',
    jname: 'Yamada-kun to Lv999 no Koi wo Suru',
    image: 'https://img.zorores.com/_r/300x400/100/9e/12/9e124bfad2fd9c8bae1cb53cd6ecd6de/9e124bfad2fd9c8bae1cb53cd6ecd6de.png',
    url: 'https://sanji.to/loving-yamada-at-lv999-18341',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: '13'
  },
  {
    title: 'Edens Zero 2nd Season',
    jname: 'Edens Zero 2nd Season',
    image: 'https://img.zorores.com/_r/300x400/100/7f/df/7fdf6665f533bc7cd366522825d31553/7fdf6665f533bc7cd366522825d31553.jpg',
    url: 'https://sanji.to/edens-zero-2nd-season-18331',
    age: 'All',
    sub: '12',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  }
]
  ```

  <br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Get Recently Added anime list:

* Use `latest()` function to get Recently Added anime list of page 1 of Zoro.to.
* You can get a particular page number of Recently Added by using `updated(3)` ( To get Recently Added page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.latest(); // It will return Recently Added anime page 1
  
  const data2 = await anime.latest(3); // It will return Recently Added anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Top Airing anime list:

* Use `airing()` or `ongoing()` or `topAiring()` function to get Top Airing  anime list of page 1 of Zoro.to.
* You can get a particular page number of Top Airing by using `airing(3)` ( To get Top Airing page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.airing(); // It will return Top Airing anime page 1
  
  const data2 = await anime.airing(3); // It will return Top Airing anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Most Popular anime list:

* Use `popular()` function to get Most Popular anime list of page 1 of Zoro.to.
* You can get a particular page number of Most Popular anime by using `popular(3)` ( To get Most Popular page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.popular(); // It will return Most Popular anime page 1
  
  const data2 = await anime.popular(3); // It will return Most Popular anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Most Favourite anime list:

* Use `favourite()` or `mostFavourite()` function to get Most Favourite anime list of page 1 of Zoro.to.
* You can get a particular page number of Most Favourite anime by using `popular(3)` ( To get Most Popular page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.favourite(); // It will return Most Favourite anime page 1
  
  const data2 = await anime.favourite(3); // It will return Most Favourite anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Completed anime list:

* Use `completed()` function to get Completed anime list of page 1 of Zoro.to.
* You can get a particular page number of Completed anime by using `completed(3)` ( To get Completed page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.completed(); // It will return Completed anime page 1
  
  const data2 = await anime.completed(3); // It will return Completed anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Search any Genere:

* Use `genere("Action", 3)` function to get list of Action genere animes on page 3 of Zoro.to.

```JS
const anime = require("z-anime");

(async () => {
  
  const action_animes = await anime.genere("Action", 1); // It will return Action genere animes on page 1 of Zoro.to.
  
  console.log(action_animes);
})();
```

### Output:

<details>
  <summary>View Output</summary>

  <br />

  ```js
[
  {
    title: 'One Punch Man 2nd Season Commemorative Special',
    jname: 'One Punch Man 2nd Season Commemorative Special',
    image: 'https://img.zorores.com/_r/300x400/100/d2/98/d2980949001f919dced6f4912004890e/d2980949001f919dced6f4912004890e.jpg',
    url: 'https://sanji.to/one-punch-man-2nd-season-commemorative-special-4768',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Majestic Prince Episode 25 – Wings to the Future',
    jname: 'Ginga Kikoutai Majestic Prince: Mirai e no Tsubasa',
    image: 'https://img.zorores.com/_r/300x400/100/b0/1e/b01ebfd842da354271873dd65a42dab4/b01ebfd842da354271873dd65a42dab4.jpg',
    url: 'https://sanji.to/majestic-prince-episode-25-wings-to-the-future-6062',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'My Hero Academia Season 2: Hero Notebook',
    jname: 'Boku no Hero Academia 2nd Season: Hero Note',
    image: 'https://img.zorores.com/_r/300x400/100/b1/77/b177b43918f62c28b19514538bd7b4d6/b177b43918f62c28b19514538bd7b4d6.jpg',
    url: 'https://sanji.to/my-hero-academia-season-2-hero-notebook-2208',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Ghost in the Shell: Stand Alone Complex 2nd GIG - Individual Eleven',
    jname: 'Koukaku Kidoutai: Stand Alone Complex 2nd GIG - Individual Eleven',
    image: 'https://img.zorores.com/_r/300x400/100/e4/b6/e4b6651c5acc4188dbd03f6a9911ce15/e4b6651c5acc4188dbd03f6a9911ce15.jpg',
    url: 'https://sanji.to/ghost-in-the-shell-stand-alone-complex-2nd-gig-individual-eleven-488',
    age: '18+',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Ghost in the Shell: Stand Alone Complex - The Laughing Man',
    jname: 'Koukaku Kidoutai: Stand Alone Complex - The Laughing Man',
    image: 'https://img.zorores.com/_r/300x400/100/4b/e6/4be62fe2ed33ae4bc36368621599aee8/4be62fe2ed33ae4bc36368621599aee8.jpg',
    url: 'https://sanji.to/ghost-in-the-shell-stand-alone-complex-the-laughing-man-415',
    age: '18+',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Koukaku Kidoutai Arise: Another Mission',
    jname: 'Koukaku Kidoutai Arise: Another Mission',
    image: 'https://img.zorores.com/_r/300x400/100/c4/76/c4764820d3010197c80bd2cd96bec96b/c4764820d3010197c80bd2cd96bec96b.jpg',
    url: 'https://sanji.to/koukaku-kidoutai-arise-another-mission-5576',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mob Psycho 100: Dai Ikkai Rei toka Soudansho Ian Ryokou - Kokoro Mitasu Iyashi no Tabi',
    jname: 'Mob Psycho 100: Dai Ikkai Rei toka Soudansho Ian Ryokou - Kokoro Mitasu Iyashi no Tabi',
    image: 'https://img.zorores.com/_r/300x400/100/40/89/4089566d77bb4aace16b33b3eae4b0b7/4089566d77bb4aace16b33b3eae4b0b7.jpg',
    url: 'https://sanji.to/mob-psycho-100-dai-ikkai-rei-toka-soudansho-ian-ryokou-kokoro-mitasu-iyashi-no-tabi-1227',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mob Psycho 100: Reigen - Shirarezaru Kiseki no Reinouryokusha',
    jname: 'Mob Psycho 100: Reigen - Shirarezaru Kiseki no Reinouryokusha',
    image: 'https://img.zorores.com/_r/300x400/100/76/6a/766a68b4445551c59593f6a9deab987a/766a68b4445551c59593f6a9deab987a.jpg',
    url: 'https://sanji.to/mob-psycho-100-reigen-shirarezaru-kiseki-no-reinouryokusha-2427',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'High School DxD BorN: Yomigaeranai Fushichou',
    jname: 'High School DxD BorN: Yomigaeranai Fushichou',
    image: 'https://img.zorores.com/_r/300x400/100/04/aa/04aa1cc88ed580094fc6c6789a6305af/04aa1cc88ed580094fc6c6789a6305af.jpg',
    url: 'https://sanji.to/high-school-dxd-born-yomigaeranai-fushichou-1698',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'High School DxD Hero: Taiikukan-ura no Holy',
    jname: 'High School DxD Hero: Taiikukan-ura no Holy',
    image: 'https://img.zorores.com/_r/300x400/100/38/84/3884a14103d45af9e5bef94a3f2da5e2/3884a14103d45af9e5bef94a3f2da5e2.jpg',
    url: 'https://sanji.to/high-school-dxd-hero-taiikukan-ura-no-holy-4071',
    age: '18+',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Full Metal Panic! Invisible Victory Intermission',
    jname: 'Full Metal Panic! Invisible Victory Intermission',
    image: 'https://img.zorores.com/_r/300x400/100/8d/28/8d28817550e28cabeeecd9c19a34b1a0/8d28817550e28cabeeecd9c19a34b1a0.jpg',
    url: 'https://sanji.to/full-metal-panic-invisible-victory-intermission-7324',
    age: '18+',
    sub: '2',
    dub: '2',
    totalepisodes: '2'
  },
  {
    title: 'Gundam Build Divers Prologue',
    jname: 'Gundam Build Divers Prologue',
    image: 'https://img.zorores.com/_r/300x400/100/43/97/4397b7d435f0eab40c193b2abe59a46b/4397b7d435f0eab40c193b2abe59a46b.jpg',
    url: 'https://sanji.to/gundam-build-divers-prologue-5687',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Kyousou Giga',
    jname: 'Kyousou Giga',
    image: 'https://img.zorores.com/_r/300x400/100/de/38/de383ae8f6f95b8e4e4f7ca1d0b5311a/de383ae8f6f95b8e4e4f7ca1d0b5311a.jpg',
    url: 'https://sanji.to/kyousou-giga-3831',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Nanbaka: Idiots with Student Numbers!',
    jname: 'Nanbaka: Shusseki Bangou no Tsuita Baka-tachi!',
    image: 'https://img.zorores.com/_r/300x400/100/10/02/1002f16b939daf0d333a9a3fc111d1c6/1002f16b939daf0d333a9a3fc111d1c6.jpg',
    url: 'https://sanji.to/nanbaka-idiots-with-student-numbers-4135',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mirai Nikki OVA',
    jname: 'Mirai Nikki',
    image: 'https://img.zorores.com/_r/300x400/100/da/31/da31f4ebbd3f1ad4254441fc0f04d5e8/da31f4ebbd3f1ad4254441fc0f04d5e8.jpg',
    url: 'https://sanji.to/mirai-nikki-ova-2396',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'The Future Diary: Redial',
    jname: 'Mirai Nikki: Redial',
    image: 'https://img.zorores.com/_r/300x400/100/8b/3f/8b3f4685ebb80490cd66c985bbcf289f/8b3f4685ebb80490cd66c985bbcf289f.jpg',
    url: 'https://sanji.to/the-future-diary-redial-1820',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Fate/Grand Order -First Order-',
    jname: 'Fate/Grand Order: First Order',
    image: 'https://img.zorores.com/_r/300x400/100/b2/52/b2524ebf8c491cc4521356e50178ab86/b2524ebf8c491cc4521356e50178ab86.jpg',
    url: 'https://sanji.to/fategrand-order-first-order-4384',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Fate/Grand Order: Moonlight/Lostroom',
    jname: 'Fate/Grand Order: Moonlight/Lostroom',
    image: 'https://img.zorores.com/_r/300x400/100/4d/b6/4db697946c23bba43913ce58540be0b1/4db697946c23bba43913ce58540be0b1.jpg',
    url: 'https://sanji.to/fategrand-order-moonlightlostroom-6918',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Fist of the North Star: The Legend of Toki',
    jname: 'Hokuto no Ken: Toki-den',
    image: 'https://img.zorores.com/_r/300x400/100/90/33/9033faebe68a6353c1f26b499f260279/9033faebe68a6353c1f26b499f260279.jpg',
    url: 'https://sanji.to/fist-of-the-north-star-the-legend-of-toki-1908',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Hokuto no Ken: Yuria-den',
    jname: 'Hokuto no Ken: Yuria-den',
    image: 'https://img.zorores.com/_r/300x400/100/6f/b5/6fb592efaecb861b3c6e2ad56e3edbdb/6fb592efaecb861b3c6e2ad56e3edbdb.jpg',
    url: 'https://sanji.to/hokuto-no-ken-yuria-den-3078',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'New Fist of the North Star',
    jname: 'Shin Hokuto no Ken',
    image: 'https://img.zorores.com/_r/300x400/100/12/04/1204df29e633eefc5ac33b2091a93036/1204df29e633eefc5ac33b2091a93036.jpg',
    url: 'https://sanji.to/new-fist-of-the-north-star-3692',
    age: '18+',
    sub: '3',
    dub: 'No dubbing yet',
    totalepisodes: '3'
  },
  {
    title: 'Hokuto no Ken: Raoh Gaiden Gekitou-hen',
    jname: 'Hokuto no Ken: Raoh Gaiden Gekitou-hen',
    image: 'https://img.zorores.com/_r/300x400/100/f9/c0/f9c0175f76aec16e973ed86e1f58d835/f9c0175f76aec16e973ed86e1f58d835.jpg',
    url: 'https://sanji.to/hokuto-no-ken-raoh-gaiden-gekitou-hen-1381',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Fist of the North Star: Raoh Side Story Junai Arc',
    jname: 'Hokuto no Ken: Raoh Gaiden Junai-hen',
    image: 'https://img.zorores.com/_r/300x400/100/5f/42/5f42293779d5197b997e6a4a56db1b1c/5f42293779d5197b997e6a4a56db1b1c.jpg',
    url: 'https://sanji.to/fist-of-the-north-star-raoh-side-story-junai-arc-1632',
    age: '18+',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Garo: Crimson Moon - The Butterfly of Time',
    jname: 'Garo: Guren no Tsuki Special',
    image: 'https://img.zorores.com/_r/300x400/100/1e/46/1e46c98c4c6ae884bdd151cdee2192aa/1e46c98c4c6ae884bdd151cdee2192aa.jpg',
    url: 'https://sanji.to/garo-crimson-moon-the-butterfly-of-time-7156',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mokei Senshi Gunpla Builders Beginning G',
    jname: 'Mokei Senshi Gunpla Builders Beginning G',
    image: 'https://img.zorores.com/_r/300x400/100/59/e8/59e88cc9de02f84b978eec452e01d9dd/59e88cc9de02f84b978eec452e01d9dd.jpg',
    url: 'https://sanji.to/mokei-senshi-gunpla-builders-beginning-g-5002',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: '3'
  },
  {
    title: 'Mobile Suit Gundam AGE: Memory of Eden',
    jname: 'Mobile Suit Gundam AGE: Memory of Eden',
    image: 'https://img.zorores.com/_r/300x400/100/87/26/8726917b5e3074c1d2af0b0321450c49/8726917b5e3074c1d2af0b0321450c49.jpg',
    url: 'https://sanji.to/mobile-suit-gundam-age-memory-of-eden-5034',
    age: 'All',
    sub: '2',
    dub: 'No dubbing yet',
    totalepisodes: '2'
  },
  {
    title: 'Mobile Suit Gundam Wing: Operation Meteor',
    jname: 'Mobile Suit Gundam Wing: Operation Meteor',
    image: 'https://img.zorores.com/_r/300x400/100/43/57/4357e7db0348e7a510f3376f7df86731/4357e7db0348e7a510f3376f7df86731.jpg',
    url: 'https://sanji.to/mobile-suit-gundam-wing-operation-meteor-1682',
    age: 'All',
    sub: '4',
    dub: 'No dubbing yet',
    totalepisodes: '4'
  },
  {
    title: 'Chou Deneiban SD Gundam Sangokuden Brave Battle Warriors',
    jname: 'Chou Deneiban SD Gundam Sangokuden Brave Battle Warriors',
    image: 'https://img.zorores.com/_r/300x400/100/a2/ab/a2abeffbddd407e91a533729b15c7ed8/a2abeffbddd407e91a533729b15c7ed8.jpg',
    url: 'https://sanji.to/chou-deneiban-sd-gundam-sangokuden-brave-battle-warriors-8365',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Mobile Suit Gundam SEED Special Edition',
    jname: 'Mobile Suit Gundam SEED Special Edition',
    image: 'https://img.zorores.com/_r/300x400/100/c5/ac/c5acf54964dc4699ff6d4fe7cc43660b/c5acf54964dc4699ff6d4fe7cc43660b.jpg',
    url: 'https://sanji.to/mobile-suit-gundam-seed-special-edition-2229',
    age: '18+',
    sub: '3',
    dub: '3',
    totalepisodes: '3'
  },
  {
    title: 'Mobile Suit Gundam SEED Destiny Special Edition',
    jname: 'Mobile Suit Gundam SEED Destiny Special Edition',
    image: 'https://img.zorores.com/_r/300x400/100/08/0c/080cd15a0e52f3e74c2dde359c5c851e/080cd15a0e52f3e74c2dde359c5c851e.jpg',
    url: 'https://sanji.to/mobile-suit-gundam-seed-destiny-special-edition-2398',
    age: '18+',
    sub: '4',
    dub: '4',
    totalepisodes: '4'
  },
  {
    title: 'Appleseed',
    jname: 'Appleseed',
    image: 'https://img.zorores.com/_r/300x400/100/ec/b2/ecb2fa76829e9b9c644df52eda9ae111/ecb2fa76829e9b9c644df52eda9ae111.jpg',
    url: 'https://sanji.to/appleseed-5200',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Izetta: The Last Witch',
    jname: 'Shuumatsu no Izetta',
    image: 'https://img.zorores.com/_r/300x400/100/69/49/694906f31958b27adcf10dbac9ef7834/694906f31958b27adcf10dbac9ef7834.jpg',
    url: 'https://sanji.to/izetta-the-last-witch-4503',
    age: '18+',
    sub: '12',
    dub: '12',
    totalepisodes: '12'
  },
  {
    title: 'Laughing Under the Clouds',
    jname: 'Donten ni Warau',
    image: 'https://img.zorores.com/_r/300x400/100/1e/a4/1ea4809607f1babc8cb514979ce0ce92/1ea4809607f1babc8cb514979ce0ce92.jpg',
    url: 'https://sanji.to/laughing-under-the-clouds-1454',
    age: 'All',
    sub: '12',
    dub: '12',
    totalepisodes: '12'
  },
  {
    title: 'Bobobo-bo Bo-bobo Recap',
    jname: 'Bobobo-bo Bo-bobo Recap',
    image: 'https://img.zorores.com/_r/300x400/100/68/f9/68f95d31124745491d057fae48ce5b1a/68f95d31124745491d057fae48ce5b1a.jpg',
    url: 'https://sanji.to/bobobo-bo-bo-bobo-recap-7005',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  }
]
  ```

  <br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Search any Anime:

* Use `search("anime name")` function to search on Zoro.to and get all search results.

```JS
const anime = require("z-anime");

(async () => {
  
  const results = await anime.search("tonikawa"); // It will return all search results from Zoro.to
  
  console.log(results);
})();
```

### Output:

<details>
  <summary>View Output</summary>

  <br />

  ```js
[
  {
    title: 'Tonikawa: Over the Moon for You - Uniform',
    jname: 'Tonikaku Kawaii: Seifuku',
    image: 'https://img.zorores.com/_r/300x400/100/e0/b4/e0b4699724197278f7e0f2daa2de8782/e0b4699724197278f7e0f2daa2de8782.jpg',
    url: 'https://sanji.to/tonikawa-over-the-moon-for-you-uniform-18227?ref=search',
    age: 'All',
    sub: '1',
    dub: '1',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Tonikawa: Over The Moon For You: 2nd Season',
    jname: 'Tonikaku Kawaii 2nd Season',
    image: 'https://img.zorores.com/_r/300x400/100/03/93/03930982d5fc730d636fa892f2d2ec93/03930982d5fc730d636fa892f2d2ec93.jpg',
    url: 'https://sanji.to/tonikawa-over-the-moon-for-you-2nd-season-18226?ref=search',
    age: 'All',
    sub: '11',
    dub: '11',
    totalepisodes: 'Not declared'
  },
  {
    title: 'TONIKAWA: Over The Moon For You Episode 12.5 – Flashbacks',
    jname: 'Tonikaku Kawaii: Kaisou',
    image: 'https://img.zorores.com/_r/300x400/100/6e/28/6e28ebe08a89e9daefb7a618864bad1c/6e28ebe08a89e9daefb7a618864bad1c.jpg',
    url: 'https://sanji.to/tonikawa-over-the-moon-for-you-episode-125-flashbacks-17458?ref=search',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'Tonikaku Kawaii: SNS',
    jname: 'Tonikaku Kawaii OVA',
    image: 'https://img.zorores.com/_r/300x400/100/12/e5/12e5c11916ae80916f86d44dac276551/12e5c11916ae80916f86d44dac276551.jpg',
    url: 'https://sanji.to/tonikaku-kawaii-sns-17392?ref=search',
    age: 'All',
    sub: '1',
    dub: 'No dubbing yet',
    totalepisodes: 'Not declared'
  },
  {
    title: 'TONIKAWA: Over the Moon For You',
    jname: 'Tonikaku Kawaii',
    image: 'https://img.zorores.com/_r/300x400/100/ee/df/eedf674a38151502e69c4f978240ffc2/eedf674a38151502e69c4f978240ffc2.jpg',
    url: 'https://sanji.to/tonikawa-over-the-moon-for-you-949?ref=search',
    age: 'All',
    sub: '12',
    dub: '12',
    totalepisodes: '12'
  }
]
  ```

  <br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Get full details of any anime:

* Use `details("anime name")` function to search and get full details of tht anime.

```JS
const anime = require("z-anime");

(async () => {
  
  const anime_details = await anime.details("tonikawa"); // It will return full anime details from Zoro.to
  
  console.log(anime_details);
})();
```

### Output:

<details>
  <summary>View Output</summary>

  <br />

  ```js
{
  title: 'Tonikawa: Over the Moon for You - Uniform',
  jtitle: 'Tonikaku Kawaii: Seifuku',
  tmage: 'https://img.zorores.com/_r/300x400/100/e0/b4/e0b4699724197278f7e0f2daa2de8782/e0b4699724197278f7e0f2daa2de8782.jpg',
  generes: 'Comedy, Romance, Shounen',
  producers: 'Seven Arcs',
  rating: '?',
  status: 'Finished Airing',
  duration: '22m',
  premiered: 'Fall 2022',
  aired: 'Nov 22, 2022',
  synonyms: '',
  jname: '',
  url: 'https://sanji.to/tonikawa-over-the-moon-for-you-uniform-18227?ref=search',
  Description: 'Special episode of Tonikaku Kawaii scheduled to be released Fall 2022.\n',
  parts: 5,
  partsList: [
    {
      name: 'Season 1',
      image: 'https://img.zorores.com/_r/100x200/100/ee/df/eedf674a38151502e69c4f978240ffc2/eedf674a38151502e69c4f978240ffc2.jpg',
      url: 'https://sanji.to/tonikawa-over-the-moon-for-you-949'
    },
    {
      name: 'Special: Flashbacks',
      image: 'https://img.zorores.com/_r/100x200/100/6e/28/6e28ebe08a89e9daefb7a618864bad1c/6e28ebe08a89e9daefb7a618864bad1c.jpg',
      url: 'https://sanji.to/tonikawa-over-the-moon-for-you-episode-125-flashbacks-17458'
    },
    {
      name: 'OVA: SNS',
      image: 'https://img.zorores.com/_r/100x200/100/12/e5/12e5c11916ae80916f86d44dac276551/12e5c11916ae80916f86d44dac276551.jpg',
      url: 'https://sanji.to/tonikaku-kawaii-sns-17392'
    },
    {
      name: 'Special: Uniform',
      image: 'https://img.zorores.com/_r/100x200/100/e0/b4/e0b4699724197278f7e0f2daa2de8782/e0b4699724197278f7e0f2daa2de8782.jpg',
      url: 'https://sanji.to/tonikawa-over-the-moon-for-you-uniform-18227'
    },
    {
      name: 'Season 2',
      image: 'https://img.zorores.com/_r/100x200/100/03/93/03930982d5fc730d636fa892f2d2ec93/03930982d5fc730d636fa892f2d2ec93.jpg',
      url: 'https://sanji.to/tonikawa-over-the-moon-for-you-2nd-season-18226'
    }
  ]
}
  ```

  <br />
  
</details>
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>

<br />

### Get Movies list:

* Use `movies()` function to get Movies list of page 1 of Zoro.to.
* You can get a particular page number of Movies by using `movies(3)` ( To get Movies page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.movies(); // It will return Top Airing anime page 1
  
  const data2 = await anime.movies(3); // It will return Top Airing anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get ONA list:

* Use `ona()` function to get ONA list of page 1 of Zoro.to.
* You can get a particular page number of ONA by using `ona(3)` ( To get ONA page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.ona(); // It will return ONA anime page 1
  
  const data2 = await anime.ona(3); // It will return ONA anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get OVA list:

* Use `ova()` function to get ONA list of page 1 of Zoro.to.
* You can get a particular page number of OVA by using `ona(3)` ( To get OVA page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.ova(); // It will return OVA anime page 1
  
  const data2 = await anime.ova(3); // It will return OVA anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get TV list:

* Use `tv()` function to get ONA list of page 1 of Zoro.to.
* You can get a particular page number of TV animes by using `tv(3)` ( To get Movies page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.tv(); // It will return tv anime page 1
  
  const data2 = await anime.tv(3); // It will return tv anime page 3
  
  console.log(data1);
  console.log(data2);
})()
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Specials list:

* Use `specials()` function to get Specials list of page 1 of Zoro.to.
* You can get a particular page number of Specials by using `specials(3)` ( To get Movies page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.specials(); // It will return Specials anime page 1
  
  const data2 = await anime.specials(3); // It will return Specials anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Dubbed Anime list:

* Use `dubbed()` function to get Dubbed Anime list of page 1 of Zoro.to.
* You can get a particular page number of Dubbed Anime by using `specials(3)` ( To get Dubbed Anime page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.dubbed(); // It will return Dubbed Anime page 1
  
  const data2 = await anime.dubbed(3); // It will return Dubbed Anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

### Get Subbed Anime list:

* Use `subbed()` function to get Dubbed Anime list of page 1 of Zoro.to.
* You can get a particular page number of Dubbed Anime by using `specials(3)` ( To get Subbed Anime page 3 ).

```JS
const anime = require("z-anime");

(async () => {
  
  const data1 = await anime.subbed(); // It will return Subbed Anime page 1
  
  const data2 = await anime.subbed(3); // It will return Subbed Anime page 3
  
  console.log(data1);
  console.log(data2);
})();
```

<br />
<p align="right">( <a href="#table-of-contents">Go to Table of Contents ⇧</a> )</p>
<br />

# Making of Z-Anime

## How?
* Using [Axios](https://github.com/axios/axios) and [Cheerio](https://github.com/cheeriojs/cheerio)
* **Axios -** A promise based HTTP client for the browser and node.js
* **Cheerio -** A fast, flexible, and elegant library for parsing and manipulating HTML and XML.

## Why?
* IDK, scraping is fun to me and also legal upto a limited extend as long as you don't misuse it.
<br />

# Contributions
* Made by [FantoX](https://github.com/FantoX)
* I don't have any other contributors in this project yet. Feel free to contribute.

<br />

# Support me
* Give this project a 🌟 if you like my project.
* Please follow me on GitHub to get notified about my upcoming projects.

<br />
