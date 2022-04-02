import "./SinglePost.scss"


const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/103979591_916522418822400_3453838840263678920_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=NeIYce4NTjMAX8v_0PW&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_jGvuds4EOCSQ9naZhLTwPs-cWmv7-bLyodFNjc3mo8Q&oe=626A2277"
                    alt="single post img"
                    className="single-post-img" />
                <h1 className="single-post-title">
                    <div className="single-post-title-content">
                        Life is what happens when you're busy making other plans. -John Lennon
                        Life is what happens when you're busy making other plans. -John Lennon
                        Life is what happens when you're busy making other plans. -John Lennon
                        Life is what happens when you're busy making other plans. -John Lennon
                    </div>

                    <div className="single-post-edit">
                        <i class="single-post-edit-icon fa-solid fa-pen"></i>
                        <i class="single-post-edit-delete fa-solid fa-circle-xmark"></i>
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">
                        Tác giả: <b>Vo Duc Long</b>
                    </span>
                    <span className="single-post-time">Một giờ trước</span>
                </div>
                <p className="single-post-content">
                    Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa
                    When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt
                    Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead
                    Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson
                    The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt
                    Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin
                    The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller
                    It is during our darkest moments that we must focus to see the light. -Aristotle
                    Whoever is happy will make others happy too. -Anne Frank
                    Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson
                </p>
            </div>
        </div>
    )
}
export default SinglePost