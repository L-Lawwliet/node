const mysql = require("mysql");
const db_config = require('./db');
const pool = mysql.createPool(db_config);

var connection;
function handleDisconnect() {
  connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
    if(err) {
      console.log('进行断线重连：' + new Date());
      setTimeout(handleDisconnect, 2000);   //2秒重连一次
      return;
    }
    console.log('连接成功');
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();

// 向外暴露方法
module.exports = {
  // query: function(sql, params, callback) {
  //   // 每次使用的时候需要创建链接，数据操作完成之后要关闭连接
  //   let connection = mysql.createConnection(db_config);
  //   connection.connect(function(err) {
  //     if(err) {
  //         console.log('数据库链接失败');
  //         throw err;
  //     }
  //     // 开始数据操作
  //     // 传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
  //     connection.query(sql, params, function(err, results, fields) {
  //       if(err) {
  //         console.log('数据操作失败');
  //         throw err;
  //       }
  //       // 将查询出来的数据返回给回调函数
  //       callback && callback(results, fields);
  //       // results作为数据操作后的结果，fields作为数据库连接的一些字段
  //       // 停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
  //       connection.end(function(err) {
  //         if(err) {
  //             console.log('关闭数据库连接失败！');
  //             throw err;
  //         }
  //       });
  //     });
  //   });
  // },
  query: function(sql, params, callback) {
    pool.getConnection(function(err, conn) {
      if(err) {
        callback(err, null, null);
      } else {
        conn.query(sql, params, function(err, results, fields) {
          if(err) {
            console.log('数据操作失败');
            throw err;
          }
          //释放连接
          conn.release();
          //事件驱动回调
          callback(results, fields);
        });
      }
    });
  }
};