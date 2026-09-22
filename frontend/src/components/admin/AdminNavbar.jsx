import React from 'react'
import { useLocation } from 'react-router-dom';

function AdminNavbar() {
  
  const location = useLocation();

  const isActive = location;
  console.log(isActive);
  return (
    <div className="p-5 text-white bg-[#222222] border-b border-[#E7E3DC]/10">
      navebar
    </div>
  );
}

export default AdminNavbar
