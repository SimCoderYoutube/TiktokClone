import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import PostSingle from '../../components/general/post'
import { getFeed } from '../../services/posts'
import styles from './styles'

/**
 * Component that renders a list of posts meant to be 
 * used for the feed screen.
 * 
 * On start make fetch for posts then use a flatList 
 * to display/control the posts.
 */
export default function FeedScreen() {
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    useEffect(() => {
        getFeed().then(setPosts)
    }, [])


    /**
     * Called any time a new post is shown when a user scrolls
     * the FlatList, when this happens we should start playing 
     * the post that is viewable and stop all the others
     */
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

    /**
     * renders the item shown in the FlatList
     * 
     * @param {Object} item object of the post 
     * @param {Integer} index position of the post in the FlatList 
     * @returns 
     */
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
