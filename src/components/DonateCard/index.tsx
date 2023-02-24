import React from "react";
import styles from './styles.module.css'

export default function DonateCard() {
  return (
    <div className="alert alert--primary" role="alert">
      <div className="card__body">
        <p>Thank you for reading!</p>
        <p>The information in this blog, as well as all the tools, apps and libraries I develop are currently open source.</p>
        <p>I would love to keep it this way, and you can help!</p>
        <p>You can buy me a coffee from here, which will go towards the next all-nighter I pull off!</p>
        <a href="https://www.buymeacoffee.com/kblagoev" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" className={styles.bmac} alt="Buy Me A Coffee" />
        </a>
        <p>Or you can support me and my code monthly over at <a href="https://github.com/sponsors/tihawk" target="_blank">Github Sponsors!</a></p>
        <p>Thanks!</p>
      </div>
    </div>
  )
}