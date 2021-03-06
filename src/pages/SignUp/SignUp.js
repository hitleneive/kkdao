import "./SignUp.css";
import { useState } from "react";
import Rock5 from "../../assets/KKDAO_Rock/Rock05.png";
import Rock6 from "../../assets/KKDAO_Rock/Rock06.png";
import Rock7 from "../../assets/KKDAO_Rock/Rock07.png";
import Close from "../../assets/close.svg";
import { motion } from "framer-motion";
import { SETTING_CONTACT } from "../../constants";

const SignUp = ({ isSmallDesktop, isMobile, data = SETTING_CONTACT }) => {
  const [isShowingForm, setIsShowingForm] = useState(
    isSmallDesktop || isMobile
  );

  // useEffect(() => {
  //   setIsShowingForm(true);
  // });

  return (
    <div id="sign-up-root-container">
      <div id="sign-up-rocks-layer">
        {!isSmallDesktop && <img src={Rock5} alt="Rock5" id="signup-rock5" />}
        <img src={Rock6} alt="Rock6" id="signup-rock6" />
        <img src={Rock7} alt="Rock7" id="signup-rock7" />
        {isSmallDesktop && <img src={Rock7} alt="Rock9" id="signup-rock9" />}
      </div>
      {isShowingForm ? (
        <Form
          setIsShowingForm={setIsShowingForm}
          isSmallDesktop={isSmallDesktop}
          isMobile={isMobile}
          data={data}
        />
      ) : (
        <div id="signUpWrapper">
          <motion.h1
            id="signup"
            onClick={() => setIsShowingForm(true)}
            initial={{
              opacity: 0,
              x: -100,
            }}
            transition={{ duration: 1 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            SIGN UP
          </motion.h1>
        </div>
      )}
    </div>
  );
};

const Form = ({
  setIsShowingForm,
  isSmallDesktop,
  isMobile,
  data = SETTING_CONTACT,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const projectName = event.target.projectName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const description = event.target.description.value;

    const info = {
      name: name,
      projectName: projectName,
      email: email,
      phone: phone,
      description: description,
    };
    window.open(
      `mailto:info@kkfund.co?subject=Register&body=${encodeURIComponent(
        data.cf_name +
          " \n" +
          name +
          "\n\n " +
          data.cf_title +
          " \n" +
          projectName +
          "\n\n " +
          data.cf_email +
          " \n" +
          email +
          "\n\n " +
          data.cf_phone +
          " \n" +
          phone +
          "\n\n " +
          data.cf_project_description +
          " \n" +
          description +
          "\n\n Thank you "
      )}`
    );
  };

  return (
    <motion.div
      id="formContainer"
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{ duration: 1 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      {!(isSmallDesktop || isMobile) && (
        <img
          src={Close}
          alt="Close Form"
          id="close"
          onClick={() => setIsShowingForm(false)}
        />
      )}
      <form id="formControl" onSubmit={handleSubmit}>
        <br />
        <h1 id="formTitle">SIGN UP</h1>
        {!(isSmallDesktop || isMobile) && <br />}
        {!(isSmallDesktop || isMobile) && <br />}
        <br id="form-input-spacing" />

        <input
          type="text"
          placeholder={data.cf_title}
          required
          name="projectName"
          className="formInput verticalInput"
        />
        <br />
        <div id="additionalInfoContainer">
          <input
            type="text"
            placeholder={data.cf_name}
            required
            className="formInput horizontalInput"
            name="name"
          />
          <br id="form-input-spacing" />
          <input
            type="text"
            placeholder={data.cf_email}
            required
            className="formInput horizontalInput"
            name="email"
          />
          <br id="form-input-spacing" />
          <input
            type="text"
            placeholder={data.cf_phone}
            required
            className="formInput horizontalInput"
            name="phone"
          />
        </div>

        <br />

        <textarea
          name="description"
          rows="5"
          cols="30"
          className="formInput"
          id="projectDescriptionInput"
          placeholder={data.cf_project_description}
        />
        <br />
        <button type="submit" id="sendBtn">
          {data.cf_button}
        </button>
      </form>
    </motion.div>
  );
};

export default SignUp;
