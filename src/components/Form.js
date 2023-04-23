import { useState } from 'react';
import axios from 'axios';

import AnswerCard from './AnswerCard';

import './style.css';

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [name, setName] = useState('');
  const [datas, setDatas] = useState([]);

  const handleSubmit = async (e) => {
    setIsClicked(!isClicked);
    e.preventDefault();
    await axios
      .get('https://api.genderize.io/?name=', {
        params: {
          name: { name },
        },
      })
      .then((result) => {
        setDatas(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container_card">
      {!isClicked ? (
        <form className="container_form" onSubmit={handleSubmit}>
          <h3>Discover more about your first name</h3>
          <div className="form_content">
            <input
              placeholder="First name"
              type="text"
              name={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <button className="button_form" type="submit">
              Show me
            </button>
          </div>
        </form>
      ) : (
        <AnswerCard
          datas={datas}
          setName={setName}
          name={name}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </div>
  );
};

export default Form;
