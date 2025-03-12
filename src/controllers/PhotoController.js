import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('photo');
class FotoController {
  store(req, res) {

    return upload(req, res, async (error) => {
      console.log(req.file);
    console.log(req.body);
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        console.log(aluno_id);
	const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
