
// 数据库 
const ModelDb = require('../db');

var api_test = async (ctx, next) => {
    // 获取db数据并且返回
    let data = await ModelDb.query();
    ctx.body = {
        items: data
    };
};
module.exports = {
    'GET /api': api_test
};