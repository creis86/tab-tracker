const Joi = require('joi');

module.exports = {

  register (req, res, next) {

    const schema = Joi.object({
      email   : Joi.string().email(),
      password: Joi.string().pattern(new RegExp('^[a-z0-9]{8,32}$', 'i'))
    });

    const { error, value } = schema.validate(req.body);

    if (error)
    switch(error.details[0].context.key) {
      
      case 'email':

        res.status(400).send({ error: 'You must provide a valid e-mail address.' });
        break;

      case 'password':
        
        res.status(400).send({ error: `Password must comply to the following rules:<br>
          1. It can ONLY contain letters and/or numbers;<br>
          2. It must be at least 8 and at most 32 characters long.`
        });
        break;
        
      default:

        res.status(400).send({ error: 'Invalid registration information.' });
        
    }

    else next();

  }

};