import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";

const Profil = () => {
  //recup de l'user
  const { user } = useContext(UserContext);

  return (
    <div>
      {user && (
        <h1>
          Profil <br />
          Vous êtes authorisé a changer votre profil
        </h1>
      )}
      {!user && (
        <h1>
          Vous devez vous authentifier. <br />
          Vous devez vous authentifier.{" "}
        </h1>
      )}
    </div>
  );
};

export default Profil;
