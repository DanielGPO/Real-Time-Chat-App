import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatPage = (props) => {

    return (
        
    <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='3107a3a9-cb06-4b63-8e11-5c011c8a3c67'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
    </div>
    
    )
}

export default ChatPage