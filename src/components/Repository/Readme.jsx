import React from 'react'
import remark from 'remark'
import remarkReact from 'remark-react'
import styles from './Readme.module.scss'

export default function Readme({ object }) {
    const readmeHtml =
        object &&
        remark()
            .use(remarkReact)
            .processSync(object.text).contents

    return (
        object && (
            <aside className={styles.readme}>
                <h3 className={styles.title}>README.md</h3>
                {readmeHtml}
            </aside>
        )
    )
}
