"use strict";

class StorePost {
    get rules() {
        return {
            title: "required|string|min:1|max:255",
            body: "required|string|min:1",
        };
    }

    get messages() {
        return {
            required: "Woah now, {{ field }} is required.",
            "title.min": "Title should be bigger then 1 symbol.",
            "title.max": "Title should be lower or equal to 255 symbols.",
            "body.min": "Body should be bigger then 1 symbol.",
        };
    }

    async fails(error) {
        this.ctx.session.withErrors(error).flashAll();

        return this.ctx.response.redirect("back");
    }

    get validateAll() {
        return true;
    }

    get sanitizationRules() {
        return {
            title: "stripTags", // Disallow HTML
            body: "escape", // Allow HTML but escape it
        };
    }
}

module.exports = StorePost;
