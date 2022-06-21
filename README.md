# Welcome to Express Escapes - the mistery app  🪄

Uuuuuh welcome welcome welcome, I see you passed the first test... not too bad 😏

Okay so: this repo is the base for your mistery app. ONE member of the team should fork and clone it, and then, start working. 

> You will be doing pair programming: but that DOESN'T MEAN that only one of you has to do the all the work. All group members will be asked questions about the code, so you all better understand what's going on in the code presented.

⏳ *Hurry up, you don't have much time*! 

This boilerplate already has every npm package you need installed, you just need to run:

```bash
npm install
```

Once it's finished, to make sure everything is okay, run:

```bash
npm run dev
````

If it is... the challenge begins.

![](https://memegenerator.net/img/instances/80695401/may-the-odds-be-ever-your-favor.jpg)

---

## Challenge 1 👣: users, users, users...

### Part 1

- Create a model for <code>User</code>. Users should have the following fields: name (string), age (number), email (string), hashedPassword (string).
- Users should be able to signup, login & logout, so you will have to create the routes and views that are necessary for it. When you create the file <code>routes/auth.js</code>, remember to import it on the the <code>app.js</code> file for it to work. 
- Remember to add links in the navbar of the app to these routes to access them easily.

You already have the packages installed and everything configured in the <code>app.js</code>, you just need to work on the routes & views part of authentication.

### Part 2

- Create a new routes file called <code>routes/enigma.js</code>. Remember to import it on the the <code>app.js</code> file for it to work. Create a **protected** route to *localhost:3000/enigmas*: **only logged in users should be able to see this route**. If a user tries to access this route without being authenticated, the route should redirect them to the login page. 

You already have a middleware for this in the <code>middlewares</code> folder. Make sure that the auth route for the login is correct and is the same in your app. If it isn't, write the right route to the login page:

```js
module.exports = isLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    // Change this line with your login route if it is different
    return res.redirect('/auth/login');
  }
  next();
};
```

Remember that you can use the middleware this way:

```js
const isLoggedIn = require('../middlewares');

router.get('/enigmas', isLoggedIn, async (req, res, next) => {
  // ...
})
```

*Create a user for each member of your team*. 

When you are finished, make sure to commit all changes and then come see us for validation and the NEXT CLUE OF THE CHALLENGE.


# Express Escapes 👻 Challenge 2

Copy this code on the <code>README.md</code> of the repository you are working on, and complete challenge 2:

---

## Challenge 2: teams, teams, teams. 🛸

Our application will have a model <code>Team</code>. The team should have the following fields:
- Name (string)
- Participants (array of User ids)

Create the routes and views necessary to:
- Create a new team. All the users in the DB should be placed in a <code>select</code>. You should be able to choose *multiple* users as participants.
- See all the teams (list of names with anchors to their detail)
- See the team detail with team name and detailed information of each one of the participants
- Edit team
- Delete team

Create a new team with your real team name and the three real users as participants.

Then, come and show the code for validation to get the NEXT CLUE OF THE CHALLENGE.

# Express escapes 🏆 Challenge 3

Copy this code on the <code>README.md</code> of the repository you are working on, and complete the **last and final challenge**:

---

## Challenge 3: enigmas, enigmas, enigmas. 🩻

Our app already has users and teams. The last part is actually the part we have been working on all day: creating the enigmas.

Create a new model called Enigma. Every <code>Enigma</code> will have the following fields:
- Title (string)
- Number (number)
- Description (string). What does the person have to do to solve it?
- Image (string). It will store an image URL from the Internet (pick any random images that you want). This field is optional.
- Team (id referencing the model <code>Team</code>). This will be a reference to the team that tried to solve the enigma.
- Solved (boolean). You will have to read about [input type checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) to solve this one. This kind of input has a property *checked*: when this happens, we should store the boolean *true* in the document and that enigma will be considered *solved*.

Create all the views and routes needed in order to:
- Create Enigmas. All the teams from the database should be placed in a <code>select</code>. You should be able to choose *only one* team per enigma.
- List all the enigmas. A list of titles as anchors. In the view, the enigmas should be **visually separated by *solved* and *not solved***. Even though you solved them all, leave some *unsolved* enigmas in the database to test this feature.
- Also, remember how we had a route /enigma that was protected to only logged-in users? EVERYTHING related to enigmas should be protected not seen by users unless they are logged in.
- See the enigma's detail with the name of the team that tried to solve it.
- Edit enigmas.
- Delete enigmas.

## Final touches 💅🏽

Remember that, for the last evaluation, your app will be judged based on:
- Navigation
- App structure
- Code quality
- Number and naming of the commits
- Style (oh yes you thought we forgot about that?)

When you are ready to submit, feel free to present your work to the judges 😈

*...Happy coding ;)*
