import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts").orderBy('timeSpam', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            // 时区的不同
            timeSpam: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" onChange={e => setInput(e.target.value)} value={input} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    {/* inputOptions */}
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />

                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
                <Post name='Xuan' description='this is a test' message='wow it worked' />
            </FlipMove>
        </div>
    )
}

export default Feed