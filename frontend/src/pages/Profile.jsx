import api from "@/services/api";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user/profile");
        console.log("dekhle",response.data.data);
        if (response) {
          setUser(response.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, [navigate]);

  return <div>
    {user ? <div>{user.name}
      <p>{user.role}</p>
      
    </div>
  
    : <p>not found</p>}</div>;
}

export default Profile;
