import "./Post.scss"

const Post = () => {
    return (
        <div className="post">
            <img
                className="post-img"
                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/276944112_466423601935892_4316563653580824210_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6YPPl0JzjvsAX_4cCAX&_nc_ht=scontent.fdad1-2.fna&oh=03_AVKXdUiedqhWfvvQ94R7KnNrO2DuA10uH91gQl6y-8pIKA&oe=62691BD3"
                alt="" />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Cuộc Sống</span>
                    <span className="post-cat">Nghệ Thuật</span>
                </div>
                <span className="post-title">
                    The way to get started is to quit talking and begin doing. -Walt Disney
                </span>
                <hr />
                <span className="post-time">1 giờ trước</span>
            </div>
            <p className="post-description">
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
                The way to get started is to quit talking and begin doing. -Walt Disney
            </p>
        </div>
    )
}

export default Post