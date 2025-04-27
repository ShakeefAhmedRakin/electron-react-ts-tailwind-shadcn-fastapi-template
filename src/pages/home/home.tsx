import { Button } from "@/components/ui/button";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import logoVite from "../../assets/vite.svg";
import logoReact from "../../assets/react.svg";
import logoElectron from "../../assets/electron.svg";
import logoFastAPI from "../../assets/fastapi.svg";

const HomePage = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [refetchData, setRefetchData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/data");
        setMessage(response.data.message);
      } catch (error) {
        setMessage("An Error Occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [refetchData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
      <div className="flex justify-center gap-8">
        <img src={logoElectron} className="w-24 h-24" alt="Electron" />
        <img src={logoReact} className="w-24 h-24" alt="React" />
        <img src={logoVite} className="w-24 h-24" alt="Vite" />
        <img src={logoFastAPI} className="w-24 h-24" alt="FastAPI" />
      </div>
      <h1 className="mt-4 text-lg text-center text-gray-700">
        This template is designed to quickly bootstrap projects.
      </h1>
      <div className="mt-6">
        <h3 className="text-center text-xl text-gray-600">
          Start by customizing the components and backend to fit your needs.
          Happy coding!
        </h3>
      </div>
      <p className="text-center text-lg my-6 h-4">
        {loading ? "Loading" : <>{message}</>}
      </p>
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          variant={"outline"}
          onClick={() => setRefetchData(!refetchData)}
        >
          Refetch Data
        </Button>
        <Button
          size="lg"
          variant={"outline"}
          onClick={() =>
            window.electron.sendNotification({
              title: "Hi",
              body: "Thanks for cloning my template",
            })
          }
        >
          Send Notification
        </Button>
      </div>

      <hr className="my-2" />
      <div>
        <Button
          size="lg"
          onClick={() =>
            window.electron.openExternal(
              "https://github.com/ShakeefAhmedRakin/electron-react-ts-tailwind-shadcn-fastapi-template"
            )
          }
        >
          See Guide
        </Button>
      </div>

      <footer className="mt-8">
        <p className="text-center text-sm text-gray-500">
          Created by me for the community to use!
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
