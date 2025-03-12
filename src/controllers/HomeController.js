class HomeController {
  async index(req, res) {
    res.status(400).json({
		msg:"Hello World"
	});
  }
}

export default new HomeController();
