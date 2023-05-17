import { NameForm } from "../nameForm/nameForm";
import { Complaint } from "../complaint/complaint";
import { Info } from "../info/info";
import { Results } from "../results/results";
import { useState } from "react";


export const Problem = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [firstNameDirty, setFirstNameDirty] = useState(false);
    // const [lastNameDirty, setLastNameDirty] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [inputText, setInputText] = useState("");
    const [textError, setTextError] = useState("");
    const [isGay, setIsGay] = useState("");
    const [isGayError, setIsGayError] = useState("")
    const [isRevo, setIsRevo] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showComplaint, setShowComplaint] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // const blurHandler = (e) => {
    //   switch (e.target.name) {
    //     case "firstName":
    //       setFirstNameDirty(true);
    //       break;
    //     case "lastName":
    //       setLastNameDirty(true);
    //       break;
    //     //no default
    //   }
    // };

    const firstNameHandler = (e) => {
      setFirstName(e.target.value);
      if (e.target.value.length < 3) {
        setFirstNameError("Ім`я повинно бути не менше 3 символів");
      } else {
        setFirstNameError("");
      }
    };

    const lastNameHandler = (e) => {
      setLastName(e.target.value);
      if (e.target.value.length < 3) {
        setLastNameError("Призвіще повинно бути не менше 3 символів");
      } else {
        setLastNameError("");
      }
    };

    // const handleButtonClick = (e) => {
    //     if (firstName !== "" && lastName !== "") {
    //         setFirstName("");
    //         setLastName("");
    //         setIsGay("");
    //     }
    //     e.preventDefault();
    // };

    //complaint
    const textHandler = (e) => {
        setInputText(e.target.value);
        if (e.target.value.length < 3) {
        setTextError("Повинно бути не менше 3 символів");
        } else {
        setTextError("");
        }
    };

    //radio
    const handleRadioChange = (e) => {
      setIsGay(e.target.value);
    };

    //revo
    const handleCheckboxChange = (e) => {
        const value = e.target.checked ? 'канєша' : 'я зож';
        setIsRevo(value);
    };

    //bitrhday
    const handleDateChange = (e) => {
      setBirthday(e.target.value);
    };

    //phone 
    const handlePhoneChange = (e) => {
      setPhoneNumber(e.target.value);
    }
    //password
    const handlePassChange = (e) => {
      setPassword(e.target.value)
    }
  


    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    //show Results
    const handleShowResults = () => {
        setShowResults(true);
    }

        //show Info
    const handleShowInfo = () => {
        if(inputText !== "" && inputText.length >= 3){
            setShowInfo(true);
        } else {
            setTextError("Треба щось написати")
        }
    };

    //show Complaint
    const handleShowComplaint = () => {
        if (firstName !== "" && lastName !== "" && isGay !== "") 
            {setShowComplaint(true);
        } else if ((firstName.length < 3 && firstName.length > 0) && (lastName.length <3 && lastName.length >0)) {
        setFirstNameError("Ім`я повинно бути не менше 3 символів");
        setLastNameError("Призвіще повинно бути не менше 3 символів");
        } else if (firstName === "") {
        setFirstNameError("Тре шось написать!");
        } else if (lastName === ""){
        setLastNameError("Тре шось написать!");
        } else if (isGay === ""){
        setIsGayError("Признавайся!")
        }
    }   

    if(showResults) {
        return (
          <Results
            firstName={firstName}
            lastName={lastName}
            inputText={inputText}
            isGay={isGay}
            isRevo={isRevo}
            birthday={birthday}
            phoneNumber={phoneNumber}
            password={password}
          />
        );
    }

    if (showInfo) {
        return (
        <Info
            onChange={handleDateChange}
            onSubmit={handleSubmit}
            phoneNumber={phoneNumber}
            password={password}
            handlePassChange={handlePassChange}
            handlePhoneChange={handlePhoneChange}
            handleShowResults={handleShowResults}
        />
        );
    }

    if(showComplaint) {
        return (
          <Complaint
            inputText={inputText}
            textHandler={textHandler}
            textError={textError}
            handleCheckboxChange={handleCheckboxChange}
            isRevo={isRevo}
            handleSubmit={handleSubmit}
            handleShowInfo={handleShowInfo}
          />
        );
    }


    

    return (
      <div className="Problem">
        <NameForm
            // handleButtonClick={handleButtonClick}
            lastNameHandler={lastNameHandler}
            firstNameHandler={firstNameHandler}
            // blurHandler={blurHandler}
            handleSubmit={handleSubmit}
            firstNameError={firstNameError}
            lastNameError={lastNameError}
            // firstNameDirty={firstNameDirty}
            // lastNameDirty={lastNameDirty}
            firstName={firstName}
            lastName={lastName}
            handleRadioChange={handleRadioChange}
            isGay={isGay}
            isGayError={isGayError}
            handleShowComplaint={handleShowComplaint}
        />
      </div>
    );
}


