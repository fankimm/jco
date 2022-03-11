import { Button, Divider } from "antd";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "/styles/board.module.css";
interface IData {
  id: number;
  title: string;
  author: string;
  time: string;
}

const Board = () => {
  const router = useRouter();
  const [data, setData] = useState<IData[]>();
  useEffect(() => {
    const testData = [];
    for (let i = 0; i < 30; i++) {
      testData.push({
        id: i,
        title: `JCO 연동명세 테스트용 title${i}`,
        time: "2022-03-11",
        author: `김지환${i}`,
      });
    }
    setData(testData);
    console.log(testData);
  }, []);

  return (
    <>
      <div style={{ width: "1080px", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <Button onClick={() => router.push("/main")}>작성하기</Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "10px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <div
            style={{
              width: "100px",
              textAlign: "center",
            }}
          >
            ID
          </div>
          <div style={{ width: "600px", textAlign: "center" }}>제목</div>
          <div
            style={{
              width: "100px",
              textAlign: "center",
            }}
          >
            작성자
          </div>
          <div
            style={{
              width: "100px",
              textAlign: "center",
            }}
          >
            작성시간
          </div>
        </div>
        {data &&
          data.map((item) => (
            <div
              className={styles.aPost}
              key={item.id}
              style={{
                width: "1080px",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid lightgrey",
                paddingTop: "8px",
                paddingBottom: "8px",
                color: "rgb(180,180,180)",
              }}
            >
              <div style={{ width: "100px", textAlign: "center" }}>
                {item.id}
              </div>
              <a
                onClick={() => router.push(`/${item.id}`)}
                className={styles.title}
                style={{ width: "600px", textAlign: "center" }}
              >
                {item.title}
              </a>
              <div style={{ width: "100px", textAlign: "center" }}>
                {item.author}
              </div>
              <div style={{ width: "100px", textAlign: "center" }}>
                {item.time}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Board;
