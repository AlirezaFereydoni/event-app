import classes from "./comment-list.module.css";

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments.map(item => {
        return (
          <li key={item.id}>
            <p>{item.comment}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
