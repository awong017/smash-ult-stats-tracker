Welcome to the Smash Ultimate Stats Tracker repository. This is an application that allows the user to track their progress for the game Super Smash Bros Ultimate by allowing the user to view their win percentage, see specific matchups, and get a glimpse of which characters they use the most. <br />
<br />
<b>Language:</b> JavaScript <br />
<b>Front-End:</b> React Hooks, styled components, HTML <br />
<b>Back-End:</b> PostgreSQL, Express <br />
<b>Other:</b> NPM, Node <br />
<b>Deployment:</b> Vercel, Heroku

To get started, you may use the following login below.

<b>username:</b> guest <br />
<b>password:</b> welcome!

Here is a list of all the application pages and their functions:

<b>1) Landing</b> 
    - User can see latest posts on /r/smashbros from Reddit. Data is fetched from the Reddit API
    - User can see who the top registered players are as well as see the top three characters with the most wins

<b>2) Home</b>
    - First page that is seen after logging in and can be accessed by clicking on the smash ball icon on the nav bar
    - Your Stats
        - Quick overview of users overall stats

<b>3) Add Stats</b>
    - Page where user can add or subtract wins or losses for a specific character matchup.
    - To add stats, complete the following: 
        - To select which character you want to change, begin by clicking either the "Player" or "Opponent" avatar. The white border around the avatar will indicate that its been selected
        - Next, select the character you desire from the "Character Select" section
        - Lastly to add stats, simply click the "+" or "-" button to add or subtract stats respectively.
    - Users can use the "View By" filter to filter character matches by a specific time frame
    - "Matchup History" is a history of the filtered matches
