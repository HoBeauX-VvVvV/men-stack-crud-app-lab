const React = require('react')

function Show(props) {
    return(
        <div>
            <a href="/games/New">Create a new game listing here</a><br/>
            <a href="/games">Go back to the Index Page</a>
            <h1>
              {props.game.title}  
            </h1>  
            <h2>{props.game.genre} made by {props.game.publisher} </h2>
            <h3>
              {props.game.havePlayed ? 'I have played it' : 'I have not played it'}
            </h3>
            <p>
                It's ID is: {props.game.id}
            </p>
            <form action={`/games/${props.game.id}/?_method=DELETE`} method="POST" >
                <button type="submit">Delete</button>
            </form>
            <form action={`/games/${props.game.id}/edit`}>
                <button type="submit">Edit Game</button>
            </form>
        </div>
    )
}


module.exports = Show
