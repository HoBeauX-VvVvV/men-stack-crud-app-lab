const React = require('react')

function Show(props) {
    return(
        <div>
            <h1>{props.game.name}</h1>
            <a href="/games/New">Create a new game listing here</a><br/>
            <a href="/games">Go back to the Index Page</a>
            <h1>
              {props.game.title}  
            </h1>  
            <h2>{props.game.genre} made by {props.game.publisher} </h2>
            <h3>
              {props.game.havePlayed? 'I have played it' : 'I have no played it'}
            </h3>
            <p>
                It's ID is: {props.game.id}
            </p>
        </div>
    )
}

module.exports = Show