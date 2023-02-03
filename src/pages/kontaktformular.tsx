import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Kontaktformular: React.FC = () => {
  const [formData, setFormData] = useState({
    anrede: '',
    vorname: '',
    name: '',
    email: '',
    telefonnummer: '',
    datum: '',
    feiern: '',
    ort: '',
    gaeste: '',
    zeiten: [] as string[],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (event.target.checked) {
      setFormData({ ...formData, zeiten: [...formData.zeiten, name] });
    } else {
      setFormData({
        ...formData,
        zeiten: formData.zeiten.filter((t) => t !== name),
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(
        'https://inacta.us7.list-manage.com/subscribe/post',
        formData
      );
      // display success message or redirect to a thank you page
    } catch (error) {
      console.error(error);
      // display error message
    }
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="py-16 text-center">
            <h1 className="mb-5">
              Nutzen Sie unser Kontaktformular für Ihr Anliegen.
            </h1>
            <p>
              Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <AnimatePresence>
              <div className="grid grid-cols-3 gap-y-48 pt-16">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <label htmlFor="vorname">Ihr Vorname</label>
                    <input
                      type="text"
                      name="vorname"
                      id="vorname"
                      onChange={handleChange}
                      value={formData.vorname}
                      required
                    />
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="name">Ihr Nachname</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Ihre Email Adresse</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefonnummer">Ihre Telefonnummer</label>
                  <input
                    type="tel"
                    name="telefonnummer"
                    id="telefonnummer"
                    onChange={handleChange}
                    value={formData.telefonnummer}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="datum">Datum des Anlasses</label>
                  <input
                    type="date"
                    name="datum"
                    id="datum"
                    onChange={handleChange}
                    value={formData.datum}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="feiern">Was haben Sie zu feiern?</label>
                  <input
                    type="text"
                    name="feiern"
                    id="feiern"
                    onChange={handleChange}
                    value={formData.feiern}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ort">Wo soll Ihr Anlass stattfinden?</label>
                  <input
                    type="text"
                    name="ort"
                    id="ort"
                    onChange={handleChange}
                    value={formData.ort}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gaeste">Ihre geplante Gästeanzahl?</label>
                  <input
                    type="number"
                    name="gaeste"
                    id="gaeste"
                    onChange={handleChange}
                    value={formData.gaeste}
                    required
                  />
                </div>
              </div>
            </AnimatePresence>

            <div className="pt-32">
              <label className="mb-16 text-center">
                Welche Zeiten präferieren Sie für einen Anruf von uns?
              </label>
              <div className="grid grid-cols-3 text-center">
                <div>
                  <input
                    type="checkbox"
                    name="Vormittag"
                    id="vormittag"
                    onChange={handleCheckboxChange}
                    value={formData.zeiten}
                  />
                  <label htmlFor="vormittag">Am Vormittag</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Nachmittag"
                    id="nachmittag"
                    onChange={handleCheckboxChange}
                    value={formData.zeiten}
                  />
                  <label htmlFor="nachmittag">Am Nachmittag</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="Abend"
                    id="abend"
                    onChange={handleCheckboxChange}
                    value={formData.zeiten}
                  />
                  <label htmlFor="abend">Am Abend</label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center pt-16">
              <button className="h-16 bg-baarblue text-white" type="submit">
                Absenden
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Kontaktformular;
