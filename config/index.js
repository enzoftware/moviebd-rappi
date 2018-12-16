module.exports = {
    port : 3000,
    dbConnectionString : 'postgres://postgres:postgres@localhost:5432/restaurant',
    saltRounds : 2,
    jwtSecret : 'secret',
    tokenExpireTime : '6h'
}