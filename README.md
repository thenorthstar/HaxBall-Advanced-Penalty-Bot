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

## Functions

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

**`isKickOnTimeLimit() : void`**: Checks if a certain time is passed after the shoot. If no scores are happened in that time, then the player is eliminated.

**`isLink(string : string) : bool`**: Checks if what player typed is link or not. If true, player is warned about link spamming and message doesn't be shown on chat for protecting others from harmful links and potential cyber attacks.

**`isPlayerInDangerZone(player : playerObject) : bool`**: Checks if the player is in the yellow rectangle or not. This makes us able to detect players who are slowing down before shooting. (2.4)

**`isPlayerSlowingDown(player : playerObject) : void`**: Checks if the player in the danger zone is slowing down or not. The division of sequential speeds is less than or equal than damping means player is slowing down and player is eliminated. (3.3)

**`isProfane(string : string) : bool`**: Checks if any content in messages of players is profane. If true, the player is warned about bad word usage, three times warning means ban and therefore blacklist.

**`isTrashGK(player : playerObject) : bool`**: Checks if the player is scored at an amount of goals greater than or equal to a certain number. If true, player is kicked and penalized for a certain time (default: 5 minutes).

**`justSendToAdmins(player : playerObject, message : string) : void`**: Sometimes players may be muted for some reason by the administration and administrators may want to see players' messages even though they were muted.

**`kickTrashGK(player : playerObject) : void`**: Players who are marked as trash GK are kicked and penalized for a certain time (default: 5 minutes). Then a new game is started if there are enough players (default: 4 players).

**`loadMap(map : object, scoreLimit : int, timeLimit : int)`**: Loads the given map object and sets the score and time limits with the given parameters.

**`_moveAllToSpec() : void`**: Moves all the players to spectators. Is bot automated.

**`_moveAllToRed() : void`**: Moves all the players to the red team. Is bot automated.

**`_moveAllToBlue() : void`**: Moves all the players to the blue team. Is bot automated.

**`moveAllToSpec(player : playerObject) : void`**: Moves all the players to spectators. Is player controlled and having admin rights is a must.

**`moveAllToRed(player : playerObject) : void`**: Moves all the players to the red team. Is player controlled and having admin rights is a must.

**`moveAllToBlue(player : playerObject) : void`**: Moves all the players to the blue team. Is player controlled and having admin rights is a must.

**`moveTimer() : void`**: Runs the countdown bar from the right to the left.

**`muteAll() : void`**: Mutes all the players apart from the administration. Having admin rights is a must.

**`muteAvailableList() : void`**: Gets the list of available players to mute. Returns empty string if no available players. Having admin rights is a must.

**`muteList() : void`**: Gets the list of muted players. Returns empty string if there are no muted players. Having admin rights is a must.

**`mutePlayer(player : playerObject) : void`**: Mutes a specified player for a certain time on command of the administration. Allowed time range is between 1 minute and 10 minutes. Sanction for mute ends automatically after that certain time, so, users don't must to unmute player on another command.

**`pointDistance(p1 : object, p2 : object) : float`**: Gets the distance between two points.

**`resetIndicators() : void`**: Countdown must be reset after start, reset or elimination.

**`see_off_player(player : playerObject) : void`**: Kicks the player with a see off message. See *commands* section.

**`setArrowPosition() : void`**: Sets the arrow position according the position of the player who is able to shoot.

**`set_password(length : int) : void`**: Sets a random password with the given length by using the **getRandomString()** function.

**`setInitialPosition(player : playerObject, position : object) : void`**: Puts the player to the given position. This is effective to freeze who is moving as an inactive player.

**`showScoreOnAvatar(player : playerObject) : void`**: Puts players' scores on their avatar after start, reset or elimination.

**`sort_ids() : object`**: Sorts the **playerList** (which should not to be confused with **room.getPlayerList()**) with respect to the ID of the players.

**`sort_ranks() : object`**: Sorts the **ranks** with respect to the goals property of the players. In this point, we have to explain something important. There are two different lists for players and ranks because of the **sort()** function of JavaScript changes the sort of the original **playerList** and this leads the turn to fall in a lock (and this leads the players to be desynchronized).

**`startTimer() : void`**: Starts the countdown bar.

**`startVoteSession(player : playerObject) : void`**: Starts the vote session for the champion of the current game. At the end, the player whose ID is equal to the number given by the champion will be kicked (or its protection level is decreased) from the room. If the champion types zero or doesn't type anything in a certain time (default: 10 seconds), then is counted as don't use of right and a new game is started if there are enough players in the room.

**`stopTimer() : void`**: Stops the countdown bar.

**`unmuteAll() : void`**: Unmutes all the players muted by **muteAll()**. Having admin rights is a must.

**`updateAdmins() : void`**: It's another one of the admin rights functions of the room. This function moves administration by inheritance, which means a player is given admin rights if there's administrators in the room. Invoked after **room.onPlayerJoin** and **room.onPlayerLeave** event handlers.

**`votePlayerForPenalizing(player : playerObject, message : string) : void`**: When the champion types something in vote session, this function is invoked and related player is kicked as we told above.

**`voteBan(player : playerObject) : void`**: Bans the player with a message (and puts it in blacklist).

**`voteBanList(player : playerObject) : void`**: Gets the list of players who are able to be banned by vote. Note that administrators cannot be voted.

**`votePlayerForBan(player : playerObject, message : string) : void`**: The player what another players typed as an ID is counted as voted and that means the amount of the votes given to him is increased. If reaches to a certain amount (default: a half of the max capacity of the room), then that player will be banned.

Of course, all these functions must to be invoked on some events, that's why we are using event handlers which the HaxBall Headless API provides for us. Now, let's take a look at them and how they are working.

## Event Handlers

**`onGamePause(byPlayer : playerObject) : void`**: Is invoked when the game is paused.

**`onGameStart(byPlayer : playerObject) : void`**: Is invoked when a game is started. After this event handler was called, the first player of the red team is made able to shoot with a red arrow which appears behind him. In the same time, a countdown starts to count the time remaining for the player to kick. The turn is inherited according to the order of the red players on the lobby. That is, the turn doesn't advance from the topmost player to the most bottom player.

**`onGameStop(byPlayer : playerObject) : void`**: Is invoked when a game is stopped. This event is mostly invoked after a game is finished and a player becomes able to make someone kicked from the room as a champion.

**`onGameTick() : void`**: Is invoked 60 times per a second when the game is running and makes us able to detect miscellanous situations in the game. Users should be very careful when using this function because of smallest error (for example: bot is trying to find the ID of an uncertain player) in the function which this event uses will crash the room.

**`onGamePause(byPlayer : playerObject) : void`**: Is invoked when the game is unpaused.

**`onKickRateLimitSet(min : int, rate : int, burst : int, byPlayer : playerObject)`**: Is invoked when kick rate is changed and is effective to prevent players to use macro to shoot faster.

**`onPlayerActivity(player : playerObject) : void`**: Is invoked when player presses a key or typing something on chat. Note that continuous presses on keyboard doesn't mean a sign of activity in the scope of the HaxBall Headless API. This event handler is also effective to detect AFK players but is currently inactive in our scripts. However, you are free the change it.

**`onPlayerAdminChange(changedPlayer : playerObject, byPlayer : playerObject) : void`**: Is invoked when a player is given admin rights or its admin rights taken. As default, our room prevents more than one players to be admin in the same time but you are free to change this.

**`onPlayerBallKick(player : playerObject) : void`**: Is invoked when a ball whose **cGroup** contains **kick** is kicked. This also means that the shoot is performed and stops the countdown.

**`onPlayerChat(player : playerObject, message : string) : void`**: Is invoked when a player types something on the chat. Possibly used to detect AFK players.

**`onPlayerJoin(player : playerObject) : void`**: Is invoked when a player joins the room. Player properties are also initialized on this event handler.

**`onPlayerKicked(kickedPlayer : playerObject, reason : string, ban : bool, byPlayer : playerObject) : void`**: Is invoked when a player is kicked/banned. If ban becomes true, player will be blacklisted with the given **reason** and the name of **kickedPlayer** and the current date.

**`onPlayerLeave(player : playerObject) : void`**: Is invoked when a player joins the room. If the player who is able to shoot leaves the game, then the turn is advanced to the next player; or if the blue player leaves the game, then a random player is chosen from the rest and a new game is started if there are enough players (default: 5 players).

**`onPlayerTeamChange(changedPlayer : playerObject, byPlayer : playerObject) : void`**: Is invoked when a player is moved from a team to another team. In our scripts, we haven't implemented anything apart from logging what going is but you are free to edit there. But don't forget that the move players to teams arbitrarily while a game is running. This is will also explained on the *warnings* section.

**`onPositionsReset() : void`**: Is invoked a certain time after a goal is scored. The turn is advanced to a new player in the red team with a red arrow appears it and the countdown starts.

**`onRoomLink(url : string) : void`**: As default, this event handler is invoked after the room is set but in the hosts with slow connections, maybe invoked more than once. In the first time of invoke, the arrays for indicators are filled for countdown.

**`onStadiumChange(newStadiumName : string, byPlayer : playerObject) : void`**: Is invoked after a stadium is loaded. As default, administrators are not allowed to change the stadium.

**`onTeamGoal(team : int) : void`**: Is invoked immediately after a goal is scored. If the team is red, then the *goals* of the player is increased but blue, then the last player who is able to shoot will be eliminated by the reason of miss.

**`onTeamVictory(scores : scoresObject) : void`**: Is invoked if the one of its **scoreLimit** or the **timeLimit** properties is reached. If red team reaches to the victory, then the blue team which also means the goal keeper is kicked as a trash GK and penalized for a certain time. But if the blue team wins, then the whole red team players are warned with a message which says they are trash players.

As we told on the **playerObject** section, **please** do not manipulate the room with this functions directly through the console panel. Because we have implemented a lot of commands for your use. Now let's take a look at these commands.

## Commands

Like as in every bot controlled rooms, our room has some commands which the players see the things or manage the room. Of course, a users who is interested in programming can easily understand which scenario requires what amount of parameters a function should have. Therefore we have separated the commands into different sets according to the amount of their functions' parameters. In our room, most of the functions have one parameters whereas a few ones have two parameters and the rest have more parameters. So, this difference leads us to separate the commands as well like functions by amount of the parameters as well as who can use them. Now, let's take a look at them:

### Commands with no Parameters

* **!admin**: Get admin rights if no admins present.
* **!allblue**: Moves everybody to the blue team (admin only).
* **!allred**: Moves everybody to the red team (admin only).
* **!allspec**: Moves everybody to spectators (admin only).
* **!bb**: Leave the room.
* **!blacklist**: Shows the blacklist with **name**, **auth** and **conn**, respectively (admin only).
* **!best**: Shows the statistics of the player whose goals at most (either in the room or not).
* **!cpw**: Clears the current password (admin only).
* **!dc**: Shows the discord link of the host (if no links present, then returns empty string).
* **!discord**: Same of **!dc**.
* **!en**: Switch language to English.
* **!help**: Shows the list of all commands.
* **!joinhistory**: Shows your joining history.
* **!mute**: Shows the list of the players (with their name and ID) who are able to be muted (admin only).
* **!muteall**: Mutes everyone who doesn't have admin rights (admin only).
* **!mutelist**: Shows the list of muted players.
* **!pw**: Sets a random password of a certain length (default length: 30 characters) (admin only).
* **!rank**: Shows your statistics.
* **!tr**: Switch language to Turkish.
* **!unmuteall**: Unmutes everyone who was muted by **!muteall** (admin only).
* **!vote**: Shows the list of the players (with their name and ID) who are able to be voted.

### Commands with one Parameter

* **!voteban (ID)** Vote the player with the given ID. Details on the *voteban* section.

### Commands with two Parameters

* **!mute (ID) (minutes)**: Mutes the player with given ID for the given certain time. At least 1 minute, at most 10 minutes are available.

### Commands with three Parameters

* **!clearban (name) (auth) (conn)**: Clears the ban of the given **name**, **auth** or **conn**. If only one parameter is present, then clears the ban of the players who have that parameter as **name**, **auth** or **conn**. For example: **!clearban thenorthstar** deletes all the players whose name is **thenorthstar**, from blacklist. The logic for **auth** and **conn** is the same. Also the logic for two parameters is the same with logic here.

### Special Command

Of course we have special command which a player is able to use when he/she became the champion. In this situation, our command is directly a parameter as its own. So, a player ID should be present to make someone kicked from the room. Do not forget that one cannot vote himself/herself or administrator(s) or someone who is not in the room. Also, do not forget that the protection level of the players who have a score which is greater than zero is just decreased with player stays alive in the room. Typing 0 immediately finishes to session whereas typing nothing for a certain time (default: 10 seconds) again finishes the session.

In most situations, commands will help you at all, that is, you will not have to manipulate things through the console panel but you will also be able to modify things through the console without crashing the room. For example, the slow mode duration is 5 seconds (5000 ms) as its default but you may want to change it to another value; or you may want to change enough player amounts to start for a new game or ban someone by vote or etc. All these can be manipulated by console panel. This also gets the user rid of editing whole a function for a small change. Now let's see the *voteban* section after explaining the commands.

## Voteban

As we told above, players may want to ban riotous players. Now there helps us a voteban function. It helps us voting them by typing their ID with its command and they are banned if their votes reach to a certain amount (default: the half of the max room capacity). But voteban has some rules itself and that's why the players may not always able to vote others. For example one cannot vote another if there are less than certain amount of players (default: 4 players) in the room. Now let's list all the rules for voteban:

* Voteban function doesn't work if there are less than certain amount of players (default: 4 players) in the room.
* You cannot vote yourselves.
* You cannot vote administrators.
* You cannot vote a player more than once.
* You cannot vote a player who isn't in the room.
* You cannot vote anyone in the room if you are in the room less than a certain time (default: 5 minutes).
* Also, voteban function should not to be used arbitrarily to ban someone who is innocent (this is also be listed on *warnings*).

After explaining voteban rules, now we are going to explain the warnings for users and players who will be join the room.

# Warnings

Of course, we have some warnings to users and players, after completing all the sections. So, first of all, we have to indicate that this room is implemented for conscious people. So, please do not download the scripts or do not join the rooms which are opened with the scripts on the link if you are not a conscious person. Frankly, we think that nobody wants to fight with unconscious and riotous players, either in the room or at another place. So, let's give a list what the users and players must care about:

* Copyrights of all the scripts belong to the developer (thenorthstar). So you cannot sell these scripts to anyone with a cost or cannot share at anywhere without showing/indicating the source.
* Be conscious of this bot is not developed for the developer's own server, so don't ask for any help apart from GitHub (e.g. Discord).
* The developer is not responsible for any errors on the different versions of code, is just responsible for only the original code which you can see on the link.
* Please feel free with modifying the script on your device, of course the developer cannot intervene what you are doing with the script at all, after publishing it.
* And please be careful when changing the scripts, especially the functions. Anyway, as we told before, you will not have to change them at all, just you may want to change the global variables which you can see at the top the scripts.
* Please do not move/mute/kick/ban/vote players arbitrarily, let you have a reason to do these operations.
* Also, blacklist function is essentially for 7/24 rooms, rather than temporary rooms. So, you can remove all the related stuff about it if you don't want to use.
* As we explained before, administration is either moved by inheritance or get by code; or there can be no administration. This is completely up to the user.
* Please do not ask for any further implementations to the developer. Because these scripts already will be in development, even though it is published. Or if you are looking for new implementations too much, please develop what you want yourself. Because both the developer doesn't must to implement new codes for you and JavaScript is easy to learn.
