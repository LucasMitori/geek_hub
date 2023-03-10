import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastError, ToastMessage } from "../components/Toast/toast";

export interface iAuthContextProps {
  children: React.ReactNode;
}

export interface iContext {
  SubmitFunction: (props: iFormValues) => void;
  LoginUser: (props: iLogin) => void;
  deleteTech: (props: any) => void;
  createTech: (props: iCreateTech) => void;
  changeTech: (tech: iTech, data: iChangeTech) => void;
  loading: boolean;
  userData: iRegisterData;
  user: iUser;
  usertech: iTech[];
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTech[];
  works: iWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

interface iFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iRegister {
  id: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}
export interface iRegisterData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}
interface iLogin {
  email: string;
  password: string;
}
interface iCreateTech {
  title: string;
  status: string;
}
interface iTech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
interface iWorks {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
interface iChangeTech {
  status: string;
}

export const AuthContext = createContext<iContext>({} as iContext);

const AuthProvider = ({ children }: iAuthContextProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [userData, setuserData] = useState<iRegisterData>({} as iRegisterData);
  const [user, setuser] = useState<iUser>({} as iUser);
  const [usertech, setUsertech] = useState<iTech[]>([]);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const { data } = await api.get<iUser>(
          `/users/${localStorage.getItem("@kenzieHub:id")}`
        );
        setUsertech(data.techs);
        setuser(data);
      } catch (error) {
        console.error(error);
      }
    }

    setLoading(false);
  }

  /*-------------------- Skip line --------------------*/

  async function SubmitFunction(data: iFormValues) {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    try {
      const response = await api.post("/users", newData);
      ToastMessage("Usu??rio Registrado com Sucesso");

      setuserData(response.data);

      navigate("/login/:user", { replace: true });
    } catch (error) {
      ToastError("User n??o cadastrado.");
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  async function createTech(data: iCreateTech) {
    const newData = {
      title: data.title,
      status: data.status,
    };

    try {
      const response = await api.post("/users/techs", newData);

      ToastMessage("Tech registrada com Sucesso");
      loadUser();
      return response;
      // setUsertech(...usertech, response.data);
    } catch (error) {
      ToastError("Tech n??o registrado, tente novamente.");
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  async function deleteTech(data: any) {
    try {
      const response = await api.delete(`/users/techs/${data}`);

      ToastMessage("Tech deletado com Sucesso");
      loadUser();
      return response;
    } catch (error) {
      ToastError("Tech n??o deletado, tente novamente.");
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  async function changeTech(tech: iTech, data: iChangeTech) {
    const newData = {
      status: data.status,
    };

    try {
      await api.put(`/users/techs/${tech.id}`, newData);
      ToastMessage("Tech alterada com Sucesso");
      loadUser();
    } catch (error) {
      ToastError("Tech n??o alterado, tente novamente.");
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  async function LoginUser(data: iLogin) {
    const newData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await api.post("/sessions", newData);
      ToastMessage("Logado com sucesso");
      const { token } = response.data;
      const { id } = response.data.user;

      // api.defaults.headers.authorization = `Bearer ${token}`;

      setuser(response.data.user);

      localStorage.setItem("@kenzieHub:token", token);
      localStorage.setItem("@kenzieHub:id", id);

      navigate("/userHub", { replace: true });
    } catch (error) {
      ToastError("Login n??o efetuado");
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        LoginUser,
        deleteTech,
        SubmitFunction,
        createTech,
        changeTech,
        loading,
        userData,
        user,
        usertech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
