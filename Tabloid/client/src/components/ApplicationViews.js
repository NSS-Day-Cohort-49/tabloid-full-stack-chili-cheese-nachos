import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import PostList from "./PostList"
import UserPostList from "./UserPostList"
import Hello from "./Hello"
import { CategoryList } from "./CategoryList"
import CategoryForm from "./CategoryForm"

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                </Route>

                <Route path="/post">
                    <PostList />
                </Route>

                <Route path="/myPosts" exact>
                    <UserPostList />
                </Route>

                <Route path="/category" exact>
                    <CategoryList />
                </Route>

                <Route path="/category/add" exact>
                    <CategoryForm />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    )
}
