
const { readFileSync } = require('fs');
import styles from "./page.module.css";
import Servers from "./api/servers.json"
import ServerIcon from "/components/ServerIcon.js";

// export async function getServerSideProps() {
//   const data = readFileSync('/servers.json');
//   console.log(JSON.parse(data));
//   return {
//     props: {
//       serverList: data
//     }
//   }
// }


export default function Home({serverList}) {

  return (
    <div className={styles.appContainer}>
      <div className={styles.serverList}>
        <ServerIcon key="" svgIcon="/server-icons/discord.svg" name="Direct Messages"></ServerIcon>
        <div className={styles.serverListDividerTop}></div>
        {Servers.Servers.map((server) => (
          <ServerIcon key="" icon={server.icon} name={server.name}></ServerIcon>
        ))}
        <ServerIcon key="" svgIcon="/server-icons/plusIcon.svg" name="Add a Server"></ServerIcon>
      </div>
      <div className={styles.serverContainer}>
        <div className={styles.topContainer}>
          <div className={styles.topServerName}>
            <h1>Oski&apos;s Anime Lounge</h1>
          </div>
          <div className={styles.topChannelName}>
            Channel Name
          </div>
        </div>
        <div className={styles.serverContentsContainer}>
          <div className={styles.serverBar}></div>
          <div className={styles.channel}></div>
          <div className={styles.memberBar}></div>
        </div>

      </div>
    </div>
  )
}