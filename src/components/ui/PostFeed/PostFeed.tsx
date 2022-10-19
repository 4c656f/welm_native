import React, {FC, useEffect, useState} from 'react';
import {View} from "react-native";
import PostsService from "../../../services/postServices/PostsService";
import {IPost} from "../../../types/IPost";
import PostCollapsed from "../PostCollapsed/PostCollapsed";

type PostFeedProps = {

}

const PostFeed:FC<PostFeedProps> = (props:PostFeedProps) => {


    const [posts, setPosts] = useState<IPost[]>([])

    const {

    } = props




    useEffect(()=>{
        PostsService.GetPosts(0, 10, "new", 365, false, false).then((res)=>{
            setPosts(res.data)
        })
    },[])



    return (
        <View>
            {
                posts.map((post)=>{
                    return(
                        <PostCollapsed
                            key={post.post_link}
                            post={post}
                        />
                    )
                })
            }
        </View>
    );
};

export default PostFeed;