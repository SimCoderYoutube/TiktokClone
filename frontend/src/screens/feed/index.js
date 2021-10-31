import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { Dimensions } from 'react-native'
import PostSingle from '../../components/post'
import { getFeed } from '../../services/posts'
export default function FeedScreen() {
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    useEffect(() => {
        getFeed().then(setPosts)
    }, [])


    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                if (element.isViewable) {
                    cell.play()
                } else {
                    cell.stop()
                }
            }

        });
    })
    const renderItem = ({ item, index }) => {
        return (
            <View style={[{ flex: 1, height: Dimensions.get('window').height - 54 }, index % 2 == 0 ? { backgroundColor: 'blue' } : { backgroundColor: 'pink' }]}>
                <PostSingle item={item} ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                windowSize={4}
                initialNumToRender={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100
                }}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
