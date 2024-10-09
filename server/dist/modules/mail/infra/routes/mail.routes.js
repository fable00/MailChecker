"use strict";
const { Router } = require("express");
const mailRouter = Router();
mailRouter.post('/', verifyEmailData(), mailCatcher);
