import React, { useEffect } from "react";
import { start } from "qiankun";

import Layout from "../../layout";
import { HomeWrapper } from "./style.js";
export default function Home() {
  useEffect(() => {
    start({
      sandbox: {
        strictStyleIsolation: true,
        experimentalStyleIsolation: true,
      },
    });
  }, []);
  return (
    <HomeWrapper>
      <Layout></Layout>
    </HomeWrapper>
  );
}
