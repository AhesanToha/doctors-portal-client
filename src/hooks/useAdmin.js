import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoadng, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdminLoading(false);
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin , adminLoadng];
};

export default useAdmin;
