import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import postImg from '../../assets/images/post.jpeg'

function Settings(props) {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src={postImg} alt="" className="settingsFormImg"/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="safak@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;