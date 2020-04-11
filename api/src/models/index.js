const Users = require('./users');
const UsersRoles = require('./usersRoles');
const Roles = require('./roles');
const Reviews = require('./reviews');
const Poems = require('./poems');
const Favorites = require('./favorites');
const Profiles = require('./profiles');

//hasMany - 1 : m
//belongsTo -  1 : 1
//belongsToMany - m : m

Users.belongsToMany(Roles, {
    through: UsersRoles,
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'SET NULL'
});
Roles.belongsToMany(Users, {
    through: UsersRoles,
    foreignKey: 'roleId',
    constraints: false,
    onDelete: 'SET NULL'
});

Profiles.belongsTo(Users, {
    foreignKey: 'userId',
    constraints: false, 
    onDelete: 'CASCADE'
});

Poems.belongsTo(Users, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});
Users.hasMany(Poems, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Poems, {
    foreignKey: 'poemId',
    constraints: false,
    onDelete: 'CASCADE'
});
Poems.hasMany(Reviews, {
    foreignKey: 'poemId',
    constraints: false,
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Users, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});
Users.hasMany(Reviews, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});

Favorites.belongsTo(Users, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});
Users.hasMany(Favorites, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: 'CASCADE'
});