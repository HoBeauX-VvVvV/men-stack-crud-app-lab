const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Game Page</h1>
            <a href="/games">Go back to the Index Page</a>
            <form action="/games" method="POST">
                Title: <input type="text" name="title" /><br/>
                Genre: <input type="text" name="genre" /><br/>
                Publisher: <input type="text" name="publisher" /><br/>
                Year: <input type="number" name="year" /><br/>
                Have I played it: <input type="checkbox" name="havePlayed" /><br/>
                <input type="submit" value="Create Game" />
            </form>
        </div>
    )
}

module.exports = New