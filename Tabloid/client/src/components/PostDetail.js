import React, { useEffect, useState } from "react";
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import { getPostById } from "../modules/postManager";

export default function PostDetails () {
    const [post, setPost] = useState({});
    const {id}  = useParams();

    useEffect(() => {
        getPostById(id).then(setPost);
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-lg-6'>
                    <ListGroup>
                        <h3>{post.title}</h3>
                        <ListGroup>
                            <img src={post.imageLocation} alt=""/>
                            <ListGroupItem>{post.content}</ListGroupItem>
                            <ListGroupItem>{post.publishDateTime}</ListGroupItem>
                            <ListGroupItem>{post.userProfile?.displayName}</ListGroupItem>
                        </ListGroup>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
