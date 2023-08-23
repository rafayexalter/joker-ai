import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6887bada-8047-479d-9e2e-f69d9b5df359");
  }, []);

  return null;
};
export default CrispChat;
