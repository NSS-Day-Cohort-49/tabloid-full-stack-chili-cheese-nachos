import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import PostList from "./PostList"
import TagList from "./Tags/TagList"
import UserPostList from "./UserPostList"
import Hello from "./Hello"
import { CategoryList } from "./Category/CategoryList"
import CategoryForm from "./Category/CategoryForm"
import PostDetails from "./PostDetail"
import TagForm from "./Tags/TagForm"

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
                </Route>

                <Route path="/post" exact>
                    <PostList />
                </Route>

                <Route path="/myPosts" exact>
                    <UserPostList />
                </Route>

                <Route path="/post/:id">
                    <PostDetails />
                </Route>

                <Route path="/category" exact>
                    <CategoryList />
                </Route>

                <Route path="/category/add" exact>
                    <CategoryForm />
                </Route>

                <Route path="/category/edit/:id" exact>
                    <CategoryForm />
                </Route>

                <Route path="/tag" exact>
                    <TagList />
                </Route>

                <Route path="/tag/add" exact>
                    <TagForm />
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
