import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import PostSingle from '../../components/general/post'
import { getFeed, getPostsByUserId } from '../../services/posts'
import styles from './styles'

/**
 * Component that renders a list of posts meant to be 
 * used for the feed screen.
 * 
 * On start make fetch for posts then use a flatList 
 * to display/control the posts.
 */
export default function FeedScreen({ route }) {
    const { setCurrentUserProfileItemInView, creator, profile } = route.params
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    useEffect(() => {
        if (profile) {
            getPostsByUserId(creator).then(setPosts)
        } else {
            getFeed().then(setPosts)
        }
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
                    if (!profile) {
                        setCurrentUserProfileItemInView(element.item.creator)
                    }
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
            <View style={{ height: Dimensions.get('window').height, backgroundColor: 'black' }}>
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
                    itemVisiblePercentThreshold: 0
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
