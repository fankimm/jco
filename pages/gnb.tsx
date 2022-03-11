import styles from "/styles/gnb.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
const Gnb = () => {
  const router = useRouter();
  const handleMenuClick = (menu: string) => {
    router.push(menu);
  };
  return (
    <>
      <div className={styles.navBar}>
        <div
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
            <Image src="/logo.png" width={30} height={30} alt="logo" />
            <span
              className={styles.menuItem}
              onClick={() => {
                handleMenuClick("/board");
              }}
            >
              JCO
            </span>
            <span
              className={styles.menuItem}
              onClick={() => handleMenuClick("/")}
            >
              LOGIN
            </span>
            <span
              className={styles.menuItem}
              onClick={() => handleMenuClick("/account")}
            >
              ACCOUNT
            </span>
            <span
              className={styles.menuItem}
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
