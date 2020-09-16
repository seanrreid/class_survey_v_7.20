# Class Survey version 7.20 (July 2020)

Available as a [GIST](https://gist.github.com/seanrreid/ab34e28eb30409b51d5c53f17e94c827)

We're going to create an app to rank our understanding of the following topics:

- HTML
- CSS
- Javascript
- PostgreSQL
- Node
- Express

We'll rank our understanding of the topics using the following 5 point scale:

- Awesome, 5
- Great, 4
- Good, 3
- Okay, 2
- Poor, 1
- Unranked, 0

## The Assignment

- Create a PSQL database
  - Create two tables; one for the topics, and another for the ranking scale
- Create a Node + Express App:
  - With a GET route that displays your assessment for each topic (how you think you rank).
  - With a POST route that allows you to change your ranking for each topic.

_HINT_: You'll probably to use a HTML `select` element to create dropdowns for the 1-5 ranking

_HINT_: You'll need to LOOP through an array of your responses and UPDATE the database accordingly.
