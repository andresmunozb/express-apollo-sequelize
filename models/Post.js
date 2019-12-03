module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        readingTime: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '3 min'
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'es'
        },
        image: {
            type: DataTypes.STRING
        },
        published: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    },
        {
            underscored: true,
            freezeTableName: true,
        }
    );

    Post.asasociate = (models) => {
        Post.hasMany(models.Tag, {
            foreingKey: {
                name: 'postId',
                field: 'post_id'
            },
            as: 'tags',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    };

    return Post;
}
