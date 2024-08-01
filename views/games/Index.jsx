const React = require('react');

function Index(props) {
    return (
        <div>
            <h1>Games index page</h1>
            <a href="/games/New">Create a new game listing</a>
            <ul>
                {
                    props.games.map((game) => {
                        return (
                            <li key={game._id}>
                               <a href={`/games/${game._id}`}>{game.title}</a> was made by {game.publisher} 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index;