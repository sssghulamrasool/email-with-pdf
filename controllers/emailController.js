const nodemailer = require("nodemailer");
const EmailModel = require("../model/emailModel");
exports.emailSent = async (req, res) => {
  try {
    const { order, email } = req.body;
    const data = await EmailModel.create({
      email: email,
      name: req.body.nam,
      phone: req.body.phone,
      order: order,
    });

    const transportar = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const messageOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Order # ${order}`,
      html: ` <h1>
          Hello <br />
          <a href="http://localhost:5555/pdf/order-284026345307074.pdf">
            Order Detail
          </a>
        </h1>`,
    };

    const response = await transportar.sendMail(messageOptions);
    res.status(201).json({
      status: "success",
      message: "success fully sent email",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
exports.email = async (req, res) => {
  const data = await EmailModel.find();
  res.status(200).json({
    status: "success",
    data,
  });
};
