import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import { HomeWrapper } from "./style";
export default function Home() {
  return (
    <HomeWrapper>
      <Header></Header>
      <div className="body">
        <Outlet></Outlet>
      </div>
    </HomeWrapper>
  );
}
