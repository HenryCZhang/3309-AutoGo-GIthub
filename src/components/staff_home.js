import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffHome() {
  const nav = useNavigate()
  return (
    <div>
      <h1>Staff Home page</h1>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-view-appointment') }} id='staff-home-btn-1' class="btn btn-primary" type="button">View My Appointments</button>
      </div>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-view-branchRevenue') }} id='guest-home-btn-3' class="btn btn-primary" type="button">View Branch Revenue</button>
      </div>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-show-branchAppointment') }} id='guest-home-btn-2' class="btn btn-primary" type="button">Show Branch Appointments</button>
      </div>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-show-clientProfile') }} id='guest-home-btn-4' class="btn btn-primary" type="button">Client Information</button>
      </div>
    </div >
  )
}
