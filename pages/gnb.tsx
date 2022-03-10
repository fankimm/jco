import styles from "../styles/gnb.module.css";
import { useRouter } from "next/router";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Router } from "next/router";
const Gnb = () => {
  const router = useRouter();
  const handleMenuClick = (menu: string) => {
    router.push(menu);
  };
  return (
    <>
      <div className={styles.navBar}>
        <div
          className="tes"
          style={{
            width: 1080,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src="/logo.png" width={30} style={{ marginRight: "10px" }} />
            <span
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => {
                handleMenuClick("/main");
              }}
            >
              JCO
            </span>
            <span
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleMenuClick("/")}
            >
              LOGIN
            </span>
            <span
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleMenuClick("/account")}
            >
              ACCOUNT
            </span>
            <span
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleMenuClick("/test")}
            >
              TEST
            </span>
          </div>
          {/* <div style={{ width: "500px" }}></div> */}
          <div
            style={{
              width: "100px",
              float: "right",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <SearchOutlined />
            <SettingOutlined />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gnb;
