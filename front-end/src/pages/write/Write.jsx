import './write.css';
import postImg from '../../assets/images/post.jpeg'

function write(props) {
    return (
        <div className="write">
            <img src={postImg} alt="" className="writeImg"/>
            <form className="writeForm" action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fa-solid fa-plus"></i>                    
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story..." 
                        type="text" 
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    );
}

export default write;