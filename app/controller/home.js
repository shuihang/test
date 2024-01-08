'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg test1';
  }
}

module.exports = HomeController;
