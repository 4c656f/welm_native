import React, {FC} from 'react';
import {IPost} from "../../../types/IPost";
import {Text, View} from "react-native";
import styles from "./PostCollapsed.scss"

type PostCollapsedProps = {
    post: IPost
}

const PostCollapsed:FC<PostCollapsedProps> = (props:PostCollapsedProps) => {

    const {
        post
    } = props


    return (
        <View
            className={styles.container}
        >
            <Text
                className={styles.body}
            >
                {post.content}
            </Text>
        </View>
    );
};

export default PostCollapsed;