const db = require('./dbhelper');
// 查询实例
db.query('SELECT * FROM user_t', [], function(result, fields) {
    console.log('查询结果：');
    console.log(result);
});