import Image from "next/image";
import styles from "./ServerIcon.module.css";

export default function ServerIcon( {icon, name, svgIcon} ) {
  return (
    <>
      {
        svgIcon 
        ?
        <div className={styles.discordLogoWrapper}><Image src={svgIcon} alt="" width={70} height={70} className={styles.discordLogo}></Image>   </div> 
        : 
        <div>
          <Image src={icon} alt="" width={70} height={70} className={styles.image}></Image>   
          {/* <div className={styles.serverName}>{name}</div> */}
        </div>
      }
    </>
  );
}