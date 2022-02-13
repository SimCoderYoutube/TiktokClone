import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setChats } from '../redux/actions/chat';
import { chatsListener } from '../services/chat';

export const useChats = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);

    const handleChatsChange = useCallback(
        (change) => {
            dispatch(setChats(change.docs.map(item => ({ id: item.id, ...item.data() }))))
        },
        [dispatch],
    )

    useEffect(() => {
        let listenerInstance;
        if (currentUser != null) {
            listenerInstance = chatsListener(handleChatsChange)
        }

        return () => {
            listenerInstance && listenerInstance()
        }
    }, [handleChatsChange, currentUser])
}