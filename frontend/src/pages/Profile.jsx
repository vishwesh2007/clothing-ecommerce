import OrderBlock from "@/components/common/OrderBlock";
import api from "@/services/api";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Loader from "../components/common/Loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [isChanged, setChanged] = useState(false);

  const [formdata, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "",
    address: "",
  });

  const navigate = useNavigate();

  // 1. Fetch user profile on mount only
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user/profile");
        if (response && response.data) {
          const userData = response.data.data || response.data;
          setUser(userData);
          // Initialize formdata once when user is fetched
          setFormData({
            name: userData.name || "",
            mobile: userData.mobile || "",
            gender: userData.gender || "",
            address: userData.address || "",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleChange = (e) => {
    const updatedData = { ...formdata, [e.target.name]: e.target.value };
    setFormData(updatedData);

    // Check if any field has actually changed compared to user object
    const change =
      updatedData.name !== (user.name || "") ||
      updatedData.mobile !== (user.mobile || "") ||
      updatedData.gender !== (user.gender || "") ||
      updatedData.address !== (user.address || "");

    setChanged(change);
  };

  const handleSave = async () => {
    try {
      const response = await api.put("/user/profile/update", formdata);
      const updatedUser = response.data.data || response.data;
      setUser(updatedUser);
      setEdit(false);
      setChanged(false);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  const handleCancel = () => {
    // Reset formdata back to original user values on cancel
    setFormData({
      name: user.name || "",
      mobile: user.mobile || "",
      gender: user.gender || "",
      address: user.address || "",
    });
    setEdit(false);
    setChanged(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center text-red-600 text-sm">
        Profile data not found. Please login again.
      </div>
    );
  }

  return (
    <div className="px-20 py-4 flex flex-col gap-8 ">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-d-h2">My Profile</h1>
        <h3 className="text-t-nav-links text-ink-soft">
          Manage your personal information, orders and account settings.
        </h3>
      </div>

      <div className="bg-white border border-[#E7E3DC] flex justify-between items-center p-8 rounded-[var(--radius-s)]">
        <div className="flex justify-center items-center gap-5">
          <div className="bg-bg w-15 h-15 rounded-full flex justify-center items-center font-bold text-ink-soft">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-d-h3 font-medium capitalize">{user.name}</h2>
            <div className="flex gap-4 text-d-nav-links text-ink-soft">
              <h3>{user.email}</h3>|
              <h3>
                +91 <span>{user.mobile || "000 000 0000"}</span>
              </h3>
            </div>
          </div>
        </div>

        {edit ? (
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button disabled={!isChanged} onClick={handleSave}>
              Save
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              setEdit(true);
              setChanged(false);
            }}
          >
            Edit Profile
          </Button>
        )}
      </div>

      <div className="flex justify-center gap-8">
        <div className="personalInfo p-8 rounded-[var(--radius-s)] bg-white border border-[#E7E3DC] flex flex-col gap-8 w-full">
          <div className="flex">
            <h2 className="text-d-h3 font-medium">Personal Information</h2>
          </div>

          <div className="info flex flex-wrap gap-8">
            <div className="flex flex-col w-50 gap-1 h-12">
              <label className="text-xs text-ink-soft font-light">
                Full Name
              </label>
              {edit ? (
                <input
                  type="text"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
                  className="text-sm capitalize border-b border-[#E7E3DC] px-2 py-1 outline-none"
                />
              ) : (
                <p className="text-sm text-ink capitalize">{user.name}</p>
              )}
            </div>

            <div className="flex flex-col w-50 gap-1 h-12">
              <label className="text-xs font-light text-ink-soft">
                Phone Number
              </label>
              {edit ? (
                <input
                  maxLength={10}
                  type="tel"
                  name="mobile"
                  onChange={handleChange}
                  value={formdata.mobile}
                  className="border-b border-[#E7E3DC] px-2 py-1 text-sm outline-none"
                />
              ) : (
                <p className="text-sm text-ink">
                  +91&nbsp; {user.mobile || "000 000 0000"}
                </p>
              )}
            </div>

            <div className="flex flex-col w-50 gap-1 h-12">
              <label className="text-xs font-light text-ink-soft">Gender</label>
              {edit ? (
                <Select
                  value={formdata.gender}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "gender",
                        value,
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-50 rounded-none border-0 border-b border-[#E7E3DC] px-2 py-1 text-sm capitalize shadow-none focus:ring-0 focus:border-ink">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem className={"px-3"} value="male">Male</SelectItem>
                    <SelectItem className={"px-3"} value="female">Female</SelectItem>
                    <SelectItem className={"px-3"} value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p className="text-sm capitalize text-ink">
                  {user.gender || "Not specified"}
                </p>
              )}
            </div>

            <div className="flex flex-col w-50 gap-1 h-12">
              <label className="text-xs font-light text-ink-soft">
                Email Address
              </label>
              <p className="text-sm text-ink">{user.email}</p>
            </div>

            <div className="flex flex-col w-full gap-1 h-12">
              <label className="text-xs font-light text-ink-soft">
                Address
              </label>
              {edit ? (
                <input
                  type="text"
                  name="address"
                  value={formdata.address}
                  onChange={handleChange}
                  className="border-b border-[#E7E3DC] px-2 py-1 text-sm outline-none"
                  placeholder="Enter your address"
                />
              ) : (
                <p className="text-sm text-ink">
                  {user.address || "Address not specified"}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-[var(--radius-s)] gap-8 p-8 bg-white border border-[#E7E3DC] w-full">
          <h2 className="text-d-h3 font-medium">My Orders</h2>
          <div className="grid-cols-2 grid gap-4">
            <OrderBlock title="Total Orders" orderNum="12" />
            <OrderBlock title="Delivered" orderNum="9" />
            <OrderBlock title="Processing" orderNum="2" />
            <OrderBlock title="Cancelled" orderNum="1" />
          </div>
          <button
            className="bg-white border border-[#E7E3DC] p-2 text-d-btn rounded-[var(--radius-s)]"
            onClick={() => navigate("/my-order")}
          >
            View All Orders
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E7E3DC] flex justify-between items-center p-8 rounded-[var(--radius-s)]">
        <div className="flex flex-col gap-8 w-full ">
          <h1 className="text-d-h3 font-medium">Saved Address</h1>
          <div className="bg-bg border-[#E7E3DC] border p-5 flex flex-col gap-1 rounded-[var(--radius-s)]">
            <h2 className="text-sm text-ink font-medium mb-2">Home</h2>
            <h3 className="text-sm text-ink font-medium capitalize">
              {user.name}
            </h3>
            <p className="text-xs text-ink-soft">
              {user.address || "No address saved"}
            </p>
            <p className="text-xs text-ink-soft">
              {user.mobile || "No phone number"}
            </p>
            <div className="text-d-btn flex gap-4 font-medium mt-2">
              <button className="text-ink/80">Edit</button>
              <button className="text-red-700">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="w-50 bg-bg hover:border-red-700 hover:bg-red-50 text-red-700 border border-[#E7E3DC] p-3 text-d-btn rounded-full"
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
