var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var name = 'Comment Box';

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.comment.map(function(comment) {
            //this is returning the the below return statement right?
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
                Hello, world! I am a {name}.
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
                <CommentList comment={this.props.comments} />
            </div>
        );
        //is this where data is being passed into the CommentList class?
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox comments={data} name = {name} />,
    //so render the commentbox and pass it in the data that is in the data json object?
    document.getElementById('content')
);