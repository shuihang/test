'use strict';

const { Controller } = require('egg');

const mongodb = require('../../utils/mongodb')


class ProjectController extends Controller {
  // 获取项目/组件代码模版
  async getTemplate() {
    const { ctx } = this;
    // 拿到template表里的数据
    const data = await mongodb().query('template')
    // console.log(data)

    ctx.body = data
  }
}

module.exports = ProjectController;
