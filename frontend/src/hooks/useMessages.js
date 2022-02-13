import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChat, messagesListener } from '../services/chat';

export const useMessages = (chatId, contactId) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    const chats = useSelector(state => state.chat.list);
    const [chatIdInst, setChatIdInst] = useState(chatId)


    const [messages, setMessages] = useState([])
    const handleMessagesChange = useCallback(
        (change) => {
            setMessages(change.docs.map(item => ({ id: item.id, ...item.data() })))
        },
        [dispatch],
    )

    useEffect(() => {
        let listenerInstance;
        if (!chatIdInst) {
            let chat = chats.find(item => item.members.some(member => member === contactId))
            if (!chat) {
                createChat(contactId).then((res) => setChatIdInst(res.id))
            } else {
                setChatIdInst(chat.id)
            }
        }
        if (currentUser != null && chatIdInst) {
            listenerInstance = messagesListener(handleMessagesChange, chatIdInst)
        }

        return () => {
            listenerInstance && listenerInstance()
        }
    }, [handleMessagesChange, currentUser, chatIdInst])

    return { messages, chatIdInst }
}