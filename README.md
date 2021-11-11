# Welcome to TiktokClone 👋
![Version](https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
[![image](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/simcoder_here)
[![image](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/simcoder_here/)
[![image](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCQ5xY26cw5Noh6poIE-VBog)

> Main repository of the SimCoder's youtube series &#34;Make an App like TIKTOK&#34;

Make a web app Like TIKTOK

I'll show you how you can do this in the simplest way and terms possible.

By the end of this series you'll have learned how the big companies do it and will be able to do the same, you not only will be able to do this app, but you'll be able to put what you learn into your very own projects!

Any question, ask me in the Forum, every question gets an answer! http://www.simcoder.com/forum

This project will be made using react native, firebase firestore, firebase storage, redux, expo, along with a lot of other packages and technologies which will help us get this TIKTOK clone app up and running as fast as possible.

### 📺 [**View the youtube tutorial series here**](https://www.youtube.com/playlist?list=PLxabZQCAe5fjzyawndGLeP1GkJTAjZlKL)

<br>

## ➕ Features
In here you'll find a list of all the features implemented in this project and the youtube tutorial for a detailed explanation of each one of them. However you can see the full series of how to make this project in the following [youtube playlist](https://www.youtube.com/playlist?list=PLxabZQCAe5fjzyawndGLeP1GkJTAjZlKL)

Currently the project has the following features:
  * [expo boilerplate](https://www.youtube.com/watch?v=HrN1Fvjp2CE)
  * [Auth system](https://www.youtube.com/watch?v=o9RlmRf4tqI)
  * Post Videos
    * [Take pictures directly in app](https://www.youtube.com/watch?v=JCIlJ9KB2_k)
    * [Choose from gallery](https://www.youtube.com/watch?v=JCIlJ9KB2_k)
  * [Profile page](https://www.youtube.com/watch?v=Izz-yYDdHWk&ab)
  * [Feed in chronological order](https://www.youtube.com/watch?v=5gPvi3iXIdM&ab_channel=SimCoder)
  * [Search Users](https://www.youtube.com/watch?v=tpPrw8lA6CU&feature=youtu.be&ab_channel=SimCoder)
  * [Like video](https://www.youtube.com/watch?v=YPGjWCWcboc&ab_channel=SimCoder)

Features to be implmeneted:
  * Follow/Unfollow users
  * Comment Posts
  * Redesign
  
<br>

## 💻 Install

First you need to install Nodejs and npm, this is different depending on the OS you are running so it is easier to check the node [page](https://nodejs.org/en/download/)

Install [expo](https://expo.io/learn), if it fails run you might need to run this with sudo
```sh
npm install expo-cli --global
```

Install the needed packages while in the root folder of the project
```sh
npm install
```


Install firebase tools
```sh
npm install -g firebase-tools
```

Deploy the project to yout firebase projhect (make sure to have billing enabled for that project). copy the backend/functions/index.js into a different place
```sh
cd backend
firebase login
firebase init (choose functions, javascript, EsLint and install deplendencies)
```

Copy the index.js into the place of the new index.js
```sh
firebase deploy
```

You can check the first [video](https://www.youtube.com/watch?v=5S9HM6pprZo&t=2s) on this series to learn how to do it easily

<br>

## 📱 Usage

To Start expo all you have to do is run this line
```sh
expo start
```

>If you want to run on android you'll need to enable developer options and USB Debugging on your device

<br>

## 💙  question FAQ

If you have any question then please use the following [Forum](https://www.simcoder.com/forum/tiktok/).

<br>

## 👤 Author

**SimCoder**

* Website: www.simcoder.com
* Twitter: [@simcoder\_here](https://twitter.com/simcoder\_here)
* Github: [@simcoderYoutube](https://github.com/simcoderYoutube)
* Youtube: [SimCoder](https://www.youtube.com/channel/UCQ5xY26cw5Noh6poIE-VBog)

## 🌟 Show your support


Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [SimCoder](https://github.com/simcoderYoutube).

This project is [Apache License 2.0](https://github.com/SimCoderYoutube/TiktokClone/blob/main/LICENSE) licensed. Some of the dependencies are licensed differently.
