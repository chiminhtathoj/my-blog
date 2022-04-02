import "./Write.scss"

const Write = () => {
    return (
        <div className="write">
            <img 
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" 
            alt="write img" 
            className="write-img" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="write-form-file-input">
                        <i class="write-icon fa-solid fa-file-image"></i>
                    </label>
                    <input type="file" id="write-form-file-input" />
                    <input type="text" placeholder="Tiêu đề" className="write-form-title-input"
                        autoFocus={true}
                    />
                </div>
                <div className="write-form-group">
                    <textarea
                        className="write-content-input"
                        placeholder="Bạn muốn chia sẻ những gì ?"
                        type="text"
                    ></textarea>
                </div>
                <button className="write-submit">Đăng</button>
            </form>
        </div>
    )
}
export default Write