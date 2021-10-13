import { getToken } from "./authManager"

const apiUrl = "/api/post"

export const getAllPosts = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then (res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("ERROR IN GETTING POSTS")
            }
        });
    });
};

export const getPostsByUserId = () => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/myPosts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
    })
}