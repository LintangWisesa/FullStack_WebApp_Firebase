![simplinnovation](https://1.bp.blogspot.com/-wStk0VZDfMk/YCC0GIRPrDI/AAAAAAAAAGc/1yj7IOUedvoeO1CuCxq7ETLW0FqXni6mwCLcBGAsYHQ/s320/logotext.png)

# __Full Stack Web App Using Firebase__

[![Video](https://img.youtube.com/vi/qpGc5YVJLqY/0.jpg)](https://www.youtube.com/watch?v=qpGc5YVJLqY)

__[Firebase](https://firebase.google.com/)__ is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.

__⭐ Requirements:__
- 💳 [Firebase](https://firebase.google.com/) account
- 💳 [Google Cloud Platform](https://cloud.google.com/) account
- 💿 [Node.js](https://nodejs.org/en/) (including npm)
- 📋 [Visual Studio Code](https://code.visualstudio.com/) or any code editor
- 💻 [Postman](https://www.postman.com/) or any HTTP client tools

__⭐ How to use this repo:__

1. Create Firebase project then create database on Firebase Firestore with a collection & an initial document. After that setup project permission on Google Cloud Platform IAM (Identity Access Management). For more detail steps, follow the tutorial video (in Bahasa).

2. Clone this repo:

    ```bash
    $ git clone https://github.com/LintangWisesa/FullStack_WebApp_Firebase.git

    $ cd FullStack_WebApp_Firebase
    ```
3. Setup backend: first insert your Google Cloud Platform credential key (`.json`) inside `backend/functions/config/key.json` then install all dependencies:

    ```bash
    $ cd backend/functions

    $ npm i
    ```
    Run locally using Firebase serve on backend dir:

    ```bash
    $ cd backend

    $ firebase serve
    ```
    If you want to deploy it on Firebase Functions, make sure you have Firebase Blaze Plan (Pay as You Go) then execute:

    ```bash
    $ cd backend

    $ firebase deploy
    ```

4. Setup frontend and run locally:

    ```bash
    $ cd frontend

    $ npm i

    $ npm start
    ```
    If you want to deploy it on Firebase hosting, make sure you have build the app.

    ```bash
    $ npm run build

    $ firebase deploy
    ```

__⭐ Enjoy!__

<hr>

#### 🍔 Lintang Wisesa

<br>

<a href="mailto: lintangwisesa@ymail.com">
  <img align="left" style="margin-right:10px" alt="lintang ymail" width="22px" src="https://camo.githubusercontent.com/b6e5ff081d7552ec05656de193794847e14d47ad/68747470733a2f2f732e79696d672e636f6d2f63762f61706976322f6d79632f6d61696c2f4d61696c5f694f535f6170705f69636f6e2e706e67" />
</a>

<a href="https://web.facebook.com/lintangbagus/">
  <img align="left" style="margin-right:10px" alt="lintang facebook" width="22px" src="https://camo.githubusercontent.com/a461898d72dd9f4c8c526dfcca9dfdc8a8c69605/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f352f35312f46616365626f6f6b5f665f6c6f676f5f253238323031392532392e7376672f3130323470782d46616365626f6f6b5f665f6c6f676f5f253238323031392532392e7376672e706e67" />
</a>

<a href="https://twitter.com/Lintang_Wisesa">
  <img style="margin-right:10px" align="left" alt="lintang twitter" width="24px" src="https://camo.githubusercontent.com/b6943877f3d8a1269974b9f820388403ee2b1978/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d4e786f754d6d7a32624f592f54385f61633937636573492f41414141414141414767302f65337659315f62646e62452f73313630302f547769747465722b6c6f676f2b323031322e706e67" />
</a>

<a href="https://www.youtube.com/user/lintangbagus">
  <img style="margin-right:10px" align="left" alt="lintang youtube" width="29px" src="https://www.pinclipart.com/picdir/big/55-557137_a-quiet-drifter-takes-a-janitorial-job-at.png" />
</a>

<a href="https://www.linkedin.com/in/lintangwisesa/">
  <img style="margin-right:10px" align="left" alt="lintang linkedin" width="24px" src="https://camo.githubusercontent.com/0d70d8c72e2f45755511d6799489dc49d0e325f0/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63652f30392f33632f63653039336337323134616433353762623636356366643266363661386236622e706e67" />
</a>

<a href="https://github.com/LintangWisesa">
  <img style="margin-right:10px" align="left" alt="lintang github" width="23px" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
</a>

<a href="https://www.hackster.io/lintangwisesa">
  <img style="margin-right:10px" align="left" alt="lintang hackster" width="23px" src="https://user-images.githubusercontent.com/10383395/49821324-358fa080-fda0-11e8-8b00-def2a67fc598.png" />
</a>

<a href="https://lintangwisesa.github.io/me/">
  <img style="margin-right:10px" align="left" alt="lintang bio" width="24px" src="https://avatars2.githubusercontent.com/u/30064213?s=460&u=6640a1c3d5c1892283e1c273006755de8d32fa59&v=4" />
</a>