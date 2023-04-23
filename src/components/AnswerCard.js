import React from 'react';

const AnswerCard = ({ name, setName, isClicked, setIsClicked, datas }) => {
  const handleClick = () => {
    setIsClicked(!isClicked);
    setName('');
  };

  return (
    <div className="container_form">
      {datas?.map((data) => (
        <div>
          <div className="form_content">
            {data.gender === null || !name ? (
              <div>
                <h3>first name unknown or not indicated</h3>
                <h3>Try again</h3>
              </div>
            ) : (
              <>
                <h3>
                  {name} is {data.gender}
                </h3>
              </>
            )}
          </div>
          <div>
            <button onClick={handleClick} type="button" className="button_form">
              Restart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnswerCard;
