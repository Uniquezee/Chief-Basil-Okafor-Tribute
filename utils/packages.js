const express = require('express');
const Router = require("express").Router();
const enVariables = require("dotenv");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


module.exports = {
  express,
  Router,
  enVariables,
  mongoose,
  nodemailer,
  session,
  passport,
  passportLocalMongoose,
}