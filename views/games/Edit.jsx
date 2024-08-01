const React = require('react');

function Edit(props) {
    const { game } = props;

    return (
        <div>
            <a href="/games">Go back to the Index Page</a>
            <h1>Edit {game.title}</h1>
            
            <form action={`/games/${game._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={game.title} /><br/>
                Genre: <input type="text" name="genre" defaultValue={game.genre} /><br/>
                Publisher: <input type="text" name="publisher" defaultValue={game.publisher} /><br/>
                Year: <input type="number" name="year" defaultValue={game.year} /><br/>
                Have I played it: <input type="checkbox" name="havePlayed" defaultChecked={game.havePlayed} /><br/>
                <input type="submit" value="Update Game" />
            </form>
        </div>
    );
}

module.exports = Edit;