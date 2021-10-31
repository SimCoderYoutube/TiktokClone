import { Video } from 'expo-av'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export const PostSingle = forwardRef(({ item }, parentRef) => {
    const ref = useRef(null);
    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => unload();
    }, [])

    const play = async () => {
        if (ref.current == null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (status?.isPlaying) {
            return;
        }
        try {
            await ref.current.playAsync();
        } catch (e) {
            console.log(e)
        }
    }

    const stop = async () => {
        if (ref.current == null) {
            return;
        }
        const status = await ref.current.getStatusAsync();
        if (!status?.isPlaying) {
            return;
        }
        try {
            await ref.current.stopAsync();
        } catch (e) {
            console.log(e)
        }
    }

    const unload = async () => {
        if (ref.current == null) {
            return;
        }
        try {
            await ref.current.unloadAsync();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Video
            ref={ref}
            style={styles.container}
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay={false}
            isLooping
            usePoster
            posterSource={{ uri: item.media[1] }}
            posterStyle={{ resizeMode: 'cover', height: '100%' }}
            source={{ uri: item.media[0] }} />
    )
})

export default PostSingle