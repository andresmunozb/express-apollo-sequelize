module.exports = {
    User:{

        posts: (parent, args, context, info) => parent.getPosts(),
    },
    Query: {
        getUsers: (parent, args, { models }) => {
            console.log(parent);
            console.log(args)
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
        },
        getUser:(parent,{id},{models}) =>{
            return models.User.findByPk(id)
        },
        getUsersAtr: (parent,{atr},{models})=>{
            console.log(atr)
            return models.User.findAll({
                attributes: atr
            })
        }
    },
    Mutation: {
        createUser: (parent, { input }, { models }) => {
            return models.User.create({ ...input })
        }
    }
}