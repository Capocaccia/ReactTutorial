var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var name = 'Comment Box.';
var footerMessage = 'Thanks for commenting!';

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a {name}
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentForm name = {this.props.name} />
                <CommentList data={this.props.data} />
                <FooterMessage message={this.props.footerMessage} />
            </div>
        );
    }
});

var FooterMessage = React.createClass({
    render: function() {
        return (
            <div className="footerMessage">
                {footerMessage}
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        console.log(this.props);
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} name = {name} />,
    document.getElementById('content')
);