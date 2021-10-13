import { getToken } from "./authManager";

const apiUrl = "/api/tag";

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An error occurred while trying to obtain tags.")
            }
        });
    });
};

export const addTag = (tag) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else if(resp.status === 400){
                throw new Error("Tag already exists. Please enter a new tag name.")
            } else{
                throw new Error("An unknown error occurred while trying to save a new tag.");
            }
        });
    });
};