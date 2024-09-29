import React, { useState } from "react";
import './commentsList.css';

const cl = [
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
    { id: 4, text: "Простить что перемееные названы убого" }
]

const Comment = ({ text, onDelete }) => {
    return (
        <div className="comment">
            {text}
            <button className="deleteBtn" onClick={onDelete}>X</button>
        </div>
    )
}

export const CommenstList = ({ }) => {
    const [comments, setComments] = useState(cl);
    const onDelete = (id) => {
        setComments(comments.filter(({ id: cId }) => id !== cId));
    }

    return (
        <div className="commentsContainer">
            {comments.map((item) => {
                const { id, text } = item;
                return <Comment text={text} onDelete={() => onDelete(id)} />
            })}
        </div>
    )
}