# SpaceShip :rocket: #

More than an API.

SpaceShip is the brain 🧠 of our videogame. It uses a MVC model system to create an rest api to serve, parse, and configure all the neccesary data in our projects.


## Structure of the models ##
Spaceship needs to serve a big amount of data related to characters, items, weapons and other stuff. For this we will gonna create a model system that will be parsed into an HTTP response with routing included.
<br>
<br>
<img src="/modelsDiagram.png"  style="height: 400px; width:800px;"/>

## Models List ##

- abstract model Base: finished ✔️
- abstract model Characters: finished ✔️
- model Characters-Player: finished ✔️
- model Characters-Enemy: finished ✔️
- model Characters-Ally: finished ✔️
- abstract model Items: pending ❌
- model Items-consumable: pending ❌
- model Items-equippable: pending ❌
- model Items-crafting: pending ❌

## Controller ##
- create controller to parse any model into a View: pending ❌
- configure db engine handler for the controller: pending

## Views ##
- configure routing and handler: pending
- Use the controller inside views to parse a Models: pending ❌
- handle all the routes for all models: pending ❌
