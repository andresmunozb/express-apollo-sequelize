module.exports = {
    Query: {
        getUsers: (parent, args, { models }) => {
            return models.User.findAll({
                /*include: [{
                    model: models.Post,
                    as: 'posts',
                    include: [{
                        model: models.Tag,
                        as: 'tags'
                    }]
                }]*/
            })
        }
    },
    Mutation: {
        createUser: (parent, { input }, { models }) => {
            return models.User.create({ ...input })
        }
    }
}