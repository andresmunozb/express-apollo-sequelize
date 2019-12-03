module.exports = {
    Query: {
        getPosts: (parent, args, { models }) => {
            return models.Post.findAll({
                /*include: [{
                    model: models.Post,
                    as: 'tags'
                }]*/
            })
        }
    },
    Mutation: {
        createPost: (parent, { input }, { models }) => {
            return models.Post.create({ ...input }, {
                include: [{
                    model: models.Tag,
                    as: 'tags'
                }]
            })
        }
    }
}