import { TechProvider } from "./contexts/TechContext";
import UserProvider, { iChildrenProps } from "./contexts/UserContext";

const Providers = ({ children }: iChildrenProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
