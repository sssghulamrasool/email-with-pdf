const express = require("express");
const { emailSent, email } = require("../controllers/emailController");
const router = express();

router.get("/", email);
router.post("/sent-email", emailSent);

module.exports = router;
