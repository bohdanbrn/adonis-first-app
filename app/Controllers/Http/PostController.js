"use strict";

const Post = use("App/Models/Post");

class PostController {
    async index({ view }) {
        const posts = await Post.all();

        return view.render("posts.index", {
            title: "Latest posts",
            posts: posts.toJSON(),
        });
    }

    async add({ view }) {
        return view.render("posts.add");
    }

    async store({ request, response }) {
        const data = request.only(["title", "body"]);

        await Post.create(data);

        return response.redirect("/posts");
    }

    async details({ params, view }) {
        const post = await Post.find(params.id);

        return view.render("posts.details", {
            post: post,
        });
    }
}

module.exports = PostController;
