const db = require('./dbhelper');
let express = require('express');
let app = express();
var bodyParser = require('body-parser');
const common = require('./utils/common');
const moment = require('./utils/moment');

//url解析 以键值对的形式
app.use(bodyParser.urlencoded({extended:true}));//Context-Type 为application/x-www-form-urlencoded 时 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.json());//用于解析json 会自动选择最为适宜的解析方式
// 查询
app.post('/select', function(req, res) {
    var sql = "SELECT * FROM animation_t";
    var reqBody = req.body;
    var keyword = reqBody.keyword.toString();
    if (keyword) {
        // 模糊查询两种方法直接在SQL语句后加 mysql.escape("%"+req.body.name+"%")
        // sql += " WHERE product_name LIKE "+mysql.escape("%"+req.body.name+"%")
        sql += " WHERE name LIKE ?"
     }
    db.query(sql, ['%' + keyword + '%'], function(result, fields) {
        var resultData = {
            "status": 200,
            "message": "success",
            data: result
        }
        res.send(resultData);
    });
});
// 添加
app.post('/add', function(req,res) {
    var reqBody = req.body;
	var time = common.getNowDate();//这里有个获取时间的函数 但是是以字符段存储的
	var addSql = 'INSERT INTO animation_t(id,name,synopsis,createDate,isEnd,coverImg,updateTime) VALUES(0,?,?,?,?,?,?)';
	var addSqlParams = [];
	addSqlParams[0] = reqBody.name.toString();
    addSqlParams[1] = reqBody.synopsis.toString();
    addSqlParams[2] = moment(reqBody.createDate).format('YYYY-MM-DD');
    addSqlParams[3] = reqBody.isEnd;
    addSqlParams[4] = reqBody.coverImg;
    addSqlParams[5] = time;
	db.query(addSql, addSqlParams, function (err, result) {
        // if (err) {
        //     console.log('[INSERT ERROR] - ', err);
        //     res.json('{"error":"报名粗错了"}');
        //     return;
        // }
		var returnObj = {
            status: 200,
            message: '添加成功',
		}
		res.json(returnObj);
        res.end();
	});
});
// 修改
app.post('/update', function(req,res) {
    var reqBody = req.body;
	var time = common.getNowDate();//这里有个获取时间的函数 但是是以字符段存储的
	var sql = 'UPDATE animation_t SET name=?,synopsis=?,createDate=?,isEnd=?,coverImg=?,updateTime=? WHERE id=?';
	var params = [];
	params[0] = reqBody.name.toString();
    params[1] = reqBody.synopsis.toString();
    params[2] = moment(reqBody.createDate).format('YYYY-MM-DD');
    params[3] = reqBody.isEnd;
    params[4] = reqBody.coverImg;
    params[5] = time;
    params[6] = reqBody.id.toString();
	db.query(sql, params, function (err, result) {
		var returnObj = {
            status: 200,
            message: '修改成功',
		}
		res.json(returnObj);
        res.end();
	});
});
// 删除
app.post('/delete', function(req, res) {
    var reqBody = req.body;
	var time = common.getNowDate();//这里有个获取时间的函数 但是是以字符段存储的
	reqBody.time = time;
	var addSqlParams = [];
	addSqlParams[0] = reqBody.id.toString();
    db.query('DELETE FROM animation_t where id=?', addSqlParams, function (error, results, fields) {
        var returnObj = {
			status: 200,
            message: 'success',
		}
		res.json(returnObj);
        res.end();
    });
})
app.listen(3000);
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})