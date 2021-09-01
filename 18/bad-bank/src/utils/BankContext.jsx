import {
  createContext,
  useContext,
  useState
} from "react";

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
  const [bank, setBank] = useState({
    loggedInUser: null,
    users: [
      {
        username: 'abriglia', password: 'asdfasdf', balance: 10,
      }
    ]
  });

  const addUser = (user) => {
    setBank({
      ...bank,
      users: [...bank.users, user]
    });
  }

  return (
    <BankContext.Provider
      value={{ bank, addUser }}
    >
      {children}
    </BankContext.Provider>
  );
}
