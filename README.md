# HaxBall Advanced Penalty Bot

Advanced penalty bot is a JavaScript based HaxBall bot which is developed by reverse engineering method as the result of the developer's observations in public penalty rooms. Fundamentally it has a quite simple logic:

* A match is started when there are enough players in the room,
* Then a turn logic makes the players able to kick the ball, respectively,
* And then, who eliminated is moved the spectators with various warning messages,
* When there are two players (one in red and one in blue), it is called the final stage and who scores the goal is called the champion,
* As an addition, we provide our champions to kick the players who they thought as bad, by voting,
* After all the steps above, a new match is started.

# Distinguishing Features

Of course, our bot is not an ordinary penalty shootout bot. That is, it has a lot of extras from an ordinary penalty bot. For example, a red arrow appears when a player is able to kick the ball (whereas the system freezes who anyone else moves). In the same, a timer counts the remaining time of the player for kicking the ball. (1.1)

Image 1.1 (A red arrow appears behind the player and countdown starts)

![1 1](https://user-images.githubusercontent.com/68077608/137155704-8170d052-5546-4b8a-a25b-a767e4e54ab3.PNG)

Is it the end? Of course, not. The most interesting and different ones are yet to come:

* The bot can understand if player is spending the time unnecessarily or slowing down near the ball; or if any goal is scored or not in a certain time.
* That is, a message is sent to the player after his/her elimination.
* Also our bot holds a lot of properties for the players like the original **room.getPlayerList()** function. How to see these properties will be explained in the **player** section. For example: one can see their join history or use our bot in different languages (currently English and Turkish).

https://gyazo.com/99108b62c8229bf3a5e9fdc9dfe4a44f

On this image, you are seeing the elimination of a player by the reason of delaying the time. Also, as you can see on the GIF, there are local and global messages. Local ones are which only one player can see at a certain moment, in their own language, whereas the global ones are which all the players can see in the language of the room. After explaining the room fundamentals and some basic properties, we are moving to the **player** and **room** sections.

# _PlayerObject

As in the most of the games, player is the main object of this game as well. So we have uploaded many functionalities to the player for more funny and realistic gaming. Now, let's look at what a player has:

* Admin (**bool**: inherited from **player.admin**)
* Auth (**string**: inherited from **player.auth** on join)
* Bad word usage; of course, we tolerate the players before banning them, when the things are gone wrong with them (**number**: 1 and 2 means warning, 3 means ban)
* Blacklist date; essentially, this property is for admins to see or clear the blacklist. But sometimes, players may want to know when or how they blacklisted, this and the following properties are a good answer for them (**string**: inherited from **room.onPlayerKicked** event handler by using Date.now() function of JS) (2.1)
* Blacklist reason (**string**: inherited from **room.onPlayerKicked** event handler, if no reason, then it will be seen as undefined)
* Blacklisted by; in some situations, player may not see who banned them and want to know him/her (**object**: inherited from **room.onPlayerKicked** event handler, if by the host, then it will be seen as undefined)
* Conn (**string**: inherited from **player.conn** on join)
* Elimination Reason; players are warned about their elimination with a message after their elimination (**number**: 0: nothing, 1: delaying, 2: miss, 3: stop/slow down, 4: timeout)
* Goals; and this one is one of the binding properties of the player in the room, by using it, players can see their and the best one's statistics (**number**: inherited from the **room.onTeamGoal** event handler)
* ID (**number**: inherited from **player.id** on join)
* Initial position; a property which estimates the players' initial position at the start and freezes them into those points if not able the kick the ball (**object**: inherited from the **room.onGameStart** and **room.onPositionsReset** event handlers by using **room.getPlayerDiscProperties** function)
* Is blacklisted (**bool**: inherited from **room.onPlayerKicked** event handler, true means player is blacklisted and cannot join the room unless their ban is cleared)
* Is in the room; this is the most important property for the player; when one (human or bot) invokes a function, they should not confuse a player with another who is not in the room. For example: a player who is not in the room should not be voted. (**bool**: its default value is true and evaluated on join, becomes false when player leaves)
* Is kickable; this one dependent of players' championships which we are going to explain as another player feature under the name of *score* (**bool**: if score is less than 1, then true)
* Is muted; sometimes, admins may not want to one or more players to talk and so, they should to be able to mute them (**bool**: if true, player gets a warning which says their messages are just seen by the administration)
* Joining time; this one is another important property of the player. Players can join the room with different names at different times, but their informations are stored also with auth and conn, so different auths/conns with same name are seen in one history. (**number**: inherited from **room.onPlayerJoin** by Date.now()) (2.2)
* Language; players may want to see the content in another languages. Currently we have two languages in our bot. (**string**: default as variable of *locale*)
* Name (**string**: inherited from **player.name**)
* Score; this one should not to be confused with *goals*. It is increased when a player becomes the champion, by eliminating all their opponents; and is decreased when kicked by the champion. (**number**: if 0, player is called kickable; if greater than 0, then becomes not kickable but their score is decreased if they are the chosen one)
* Speed in the danger zone; this danger zone is the area between the left of the ball (at the beginning) and the line behind the arc. So, who slows down in this area is eliminated. (**object**: if the division of the second by the first of the sequential real numbers in this array is equal or less than the damping of the player, then he/she is called slowed down and eliminated)
* Successful join; this property is prevent a player's blacklist reason to get widen by joins. For example:
  On first join, reason: insult
  On second join, reason: You are banned forever!
                  Date: 2021-10-13 17:11:06.340
                  reason: insult
                  by: undefined
  On third join, ... as you see it will be getting more more wider. So we have added this property to the player, for getting his blacklist reason of the last successful join (**bool**: If doesn't be kicked by the bot on join, becomes true; else becomes false)
* Team (**number**: inherited from **player.team**)
* Turn; players should be in a queue before kicking the ball, therefore, this property has been added to the player. (**bool**: if true, then player is able to kick the ball, else, either player is not in the red team or not able to kick)
* Voted IDs; the another important property is this, players may want to vote riotous people in the room (**object**: if the player doesn't vote anyone in the room, when it's empty, ID of the people who he/she voted is pushed respectively if used)
* Votes given; when a player votes anyone else, this property moves in and the voted player approaches to being banned as the votes given to him increased (**number**: 0 to the half of max player amount for the room, for example: 4 for 8 of max capacity) (2.3)

The above are the properties of the player. Also, because of the player is a class, rather than an object, it has a lot of functions for changing that properties.

Image 2.1 (A blacklisted player is trying to join the room)

![2 1](https://user-images.githubusercontent.com/68077608/137157658-5141690c-d8e1-4be0-bde5-509fa7d7751b.PNG)

Image 2.2 (The developer is seeing his joining history. But in fact, that joining dates will not be that much near to each other as you appreciate)

![2 2](https://user-images.githubusercontent.com/68077608/137157682-7a5fb0f9-94d4-4ae9-9135-438e314fb334.PNG)

Image 2.3 (A player votes another one, if voted that one before, is warned with deny message)

![2 3](https://user-images.githubusercontent.com/68077608/137159166-58ab437b-56a8-4f08-a32a-4f37f1ab17f2.PNG)

After player's properties, let's move to functions of the player class:

**`activeTurn(player : playerObject) : void`**: Makes the player able to shoot.

**`_getPlayer(id : int) : _playerObject`**: Gets the player informations.

**`_initPlayer(player : playerOject) : void`**: Initialize player properties on join.

**`clearSpeedsInDangerZone(player : playerObject) : void`**: Stops logging the speed of the player into *speedsInDangerZone* property of it and makes it empty.

**`decreaseScore(player : playerObject) : void`**: Decreases the player's score (which you should not confuse with goals). If zero, player becomes kickable by the current champion by vote.

**`findOlderVotes(player : playerObject) : int`**: Finds the player's older votes, that is the amount of the votes given to their older accounts.

**`hasDoubleBlanks(string : string) : bool`**: Checks if the player has multiple blanks in their nickname.

**`hasInvalidCharacters(string : string) : bool`**: Checks if the player has invalid characters in their nickname. For example: Chinese characters.

**`hasSlowMode(player : playerObject) : bool`**: Checks if the player spamming or not. If **true**, player must wait for a certain time (default: 5 seconds) to write again.

**`hasTooShortName(length : int, string : string) : bool`**: Checks if the player has a name whose length is shorter than a certain value.

**`increaseBadWordUsage(player : playerObject) : int`**: Increases the bad word usage of the player if any message of the player is profane.

**`increaseGoals(player : playerObject) : void`**: Increases the goals of the player.

**`increaseScore(player : playerObject) : void`**: Increases the score (that is, the amount of its championships) of the player.

**`increaseVotes(player : playerObject) : void`**: Increases the amount of votes given to the player.

**`isAdmin(player : playerObject) : bool`**: Checks if the player is admin or not.

**`isBlacklisted(player : playerObject) : void`**: Checks if the player is blacklisted or not. If true, player will be banned with an information message.

**`isEqualToPlayerID(id : int, message : string) : bool`**: Checks if the message is equal to given ID.

**`isInTheRoom(id : int) : bool`**: Checks if the player is in the room.

**`isJoinTimeEnough(player : playerObject, time : int) : bool`**: Checks if the player is in the room for more than a certain time.

**`isMoving(player : playerObject) : bool`**: Checks if the player is moving or not.

**`isMuted(player : playerObject) : bool`**: Checks if the player is muted or not.

**`isPenalized(player : playerObject) : bool`**: Checks if the player is penalized (kicked by vote of the champion or as trash GK) or not.

**`isStartingOrEndingWithBlankCharacter(string : string) : bool`**: Checks if the player has blank characters at the left or right of its nickname.

**`mutePlayer(player : playerObject) : void`**: Mutes the given player (its auth will be moved to mute list).

**`passiveTurn(player : playerObject) : void`**: Makes the player unable to shoot.

**`penalize(player : playerObject) : void`**: Penalizes the player (its auth will be moved to penalty list which should not to be confused with the blacklist).

**`pushSlowMode(auth : string) : void`**: When a player types something on the chat, its auth will be moved to slow mode list for 5 seconds, and then removed from there.

**`pushSpeedsInDangerZone(player : playerObject)`**: Pushs the speed of the player if he/she is in the danger zone. (2.4)

**`removeBlacklist(player : playerObject, name : ?string, auth : ?string, conn : ?string) : void`**: This is a critical function because of most of players will confuse to how to use this function as a command and wants to know how it works. Now, as a briefly explanation; at least one parameter apart from the obligatory *player* parameter is enough to do some changes in blacklist. The rest is explained detailedly on *commands*.

**`removeSlowMode(auth : string) : void`**: Removes the given auth from the slow mode list after the certain time is expired.

**`remove_penalty(player : playerObject) : void`**: Removes the auth from the given player, from penalty list.

**`resetVotes(player : playerObject) : void`**: In our version, this function is currently deactivated but you can activate it after downloading the scripts.

**`switchLanguageToTurkish(player : playerObject) : void`**: Changes the given player's language to Turkish.

**`switchLanguageToEnglish(player : playerObject) : void`**: Changes the given player's language to English.

**`unmutePlayer(player : playerObject) : void`**: Unmutes the given player (its auth will be removed from mute list).

Image 2.4 (The danger zone in yellow rectangle, of course you will not see this rectangle)

![2 4](https://user-images.githubusercontent.com/68077608/137291190-356ce006-a174-4081-8d33-07739150a9c6.PNG)

That's all for **playerObject** for now. Before finishing this section let's remind that don't manipulate the room via this functions through the console panel as much as possible. *Commands* will resolve your problem already. Now, let's move to the **roomObject** section.

# _roomObject

This is where the game and players take place as you know. So, like as the **playerObject** class, this class has also some functions like it, but also doesn't have distinguishing properties unlike the player. Because there is only one room as you appreciate. Anyway, let's get started to explain the room's functionality.

As an advanced room, it is able to understand what players are doing, what going is in it, more than other rooms as expected. So, we have implemented a lot of functions to make the room gains that ability. For example, player move detectors, vote functions, eliminations and etc. Now, we are going to look the functions:

**`players() : object`**: This one sorts the players according to ID and gets the sorted list. And is the one of the most used functions of the room.

**`team_spec() : object`**: Gets the players who are in spectators.

**`team_red() : object`**: Gets the players who are in the red team.

**`team_blue() : object`**: Gets the players who are in the blue team.

**`advanceTurn() : void`**: Advances the turn when a player performs their shoot. Is invoked after **room.onGameStart**, **room.onPositionReset** event handlers and elimination.

**`blackList(kickedPlayer : playerObject, reason : string, ban : bool, byPlayer : playerObject) : void`**: As careful players care, it is invoked after **room.onPlayerKicked** event handler when ban is true.

**`champion(player : playerObject) : void`**: This function is invoked when a player is the winner of the final kick. (3.1)

**`changeFontColorIfAdmin(player : playerObject) : void`**: Administrators are able to type messages with bold and different color type.

**`checkEnd() : void`**: After all the steps at the first section end. This function is invoked and a new game starts if there are enough players.

**`checkIfEnoughPlayers() : void`**: A new game is started if there are enough players. Of course there should not be game which is currently running.

**`clearAllAvatars() : void`**: Players' score will be shown on their avatars after **room.onGameStart**, **room.onPositionReset** event handlers and elimination, this function is invoked a certain time after the above functions were invoked. (3.2)

**`clear_password(player : playerObject) : void`**: We are getting slowly moving the crucial functions of the **roomObject**. And this one is the first of them. But how? As you can see, this function has a *playerObject* typed argument which checks if the given player is admin or not. Of course, a player should not have authorization for setting/removing passwords in room unless they were admin.

**`deletePlayer(id : int) : void`**: This function is invoked after the **room.onPlayerLeave** event and *_playerObject.isInTheRoom* becomes **false**.

**`eliminate(player : playerObject) : void`**: A red player is eliminated either if spends the time unnecessarily or misses his shoot or slows down in the danger zone, or time is expired even though there's a kick. Also, player will be warned with a message about his elimination. (2.4)

**`fillIndicators() : void`**: This function is invoked immediately after the room was set (**room.onRoomLink** event handler). Indicators are the rank of the discs at the corners of the numbers which you see on the countdown.

**`findActivePlayer() : playerObject`**: This is another one of the most important functions of the **roomObject**. Finds the player who is able to shoot and gets its information.

**`freeze() : void`**: As we told above, there is an active player whereas there are inactive players. These inactive players (players who are unable to shoot) are frozen in a smallest move.

**`get_admin(player : playerObject) : void`**: This function is one of the miscellanous admin functions which we provided to our users. So, players can get their admin rights either by code or by inheritance. Or there can be no admin rights for public users. This is completely up to the user. In this function, player gets its admin rights by typing code which we explained on the *commands* section.

**`get_admins() : object`**: This function gets the list of the player(s) who is/are in the administration. As default, it can be either one player or nobody.

**`get_best(player : playerObject) : void`**: Gets the statistics of the player whose goals are at most, either in the room or not.

**`get_blacklist(player : playerObject) : void`**: Gets the blacklisted players' informations. Having admin rights is a must to see this.

**`get_commands(player : playerObject) : void`**: Gets the list of commands.

**`get_discord(player : playerObject) : void`**: Gets your discord link. If no link is provided, returns empty string.

**`get_joinHistory(player : playerObject) : void`**: Gets the joining history of the player. Different names with same **auth** or **conn** will be listed in the same history.

**`get_rank(player : playerObject) : void`**: Gets the statistics of the player.

**`getRandomInt(number : int) : int`**: Gets a random integer between zero and the given integer value (that value will not be included, for example: **getRandomInt(25)** returns an integer value between 0 and 24)

**`getRandomString(length : int) : string`**: Gets a random string in the set of letters of the English alphabet (either lower or upper case) and digits (from 0 to 9). We are going to use this function to set a random password for our room.

**`isBallTouched() : bool`**: Checks if the ball is touched or not.

**`isCommand(command : string) : bool`**: Checks if the given command is command for a function with one parameter.

**`isCommand2(command : string) : bool`**: Checks if the given command is command for a function with two parameters.

**`isCommand4(command : string) : bool`**: Checks if the given command is command for a function with four parameters.

**`isDelayingKickOff() : void`**: Checks if the active player (player who is able to shoot) is spending time unnecessarily or not. Player will be eliminated if 10 seconds passed without any shoots. This is also effective to eliminate AFK players.

**`isDuplicatedAuth(auth : string) : bool`**: Checks if the **auth** of the player is used by another player in the room. This is effective to detect the players who are abusing the room by joining multiple times. But as a disadvantage, it is not effective to prevent multiple joins from the same player with different **auth**s if there's no check for **conn**. Invoked on **room.onPlayerJoin** event handler as you appreciate.

**`isDuplicatedAuth(conn : string) : bool`**: Checks if the **conn** of the player is used by another player in the room. This is effective to detect the players who are abusing the room by joining multiple times. But as a disadvantage, prevents different players on the same network to join the room. Invoked on **room.onPlayerJoin** event handler as you appreciate.

**`isDuplicatedName(name : string) : bool`**: Checks if the **name** of the player is used by another player in the room. This is effective to detect the players who are abusing the room by joining multiple times, and also effective to detect fake name usages. Invoked on **room.onPlayerJoin** event handler as you appreciate.
