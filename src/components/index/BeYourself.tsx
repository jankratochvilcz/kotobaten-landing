import classNames from "classnames"
import React, { useEffect, useState } from "react"

import "./BeYourself.css"

const names = [
    "Naruto",
    "Majima",
    "Rem",
    "Mitsuha",
    "マスター",
    "Kiryu",
    "田中さん",
    "ユニーク",
    "Emiria",
    "yourself",
]

const BeYourself = () => {
    const [nameIndex, setNameIndex] = useState<number>(0)

    useEffect(() => {
        if (names.length - 2 < nameIndex) {
            return
        }

        const interval = setInterval(
            index => {
                console.log(index + 1)
                setNameIndex(index + 1)
                clearInterval(interval)
            },
            2000 / (nameIndex + 1),
            nameIndex
        )
    }, [nameIndex, setNameIndex])

    return (
        <div className="be-yourself-root">
            <div className="be-yourself-container">
                <span>Be&nbsp;</span>
                <span
                    className={classNames("be-yourself-name", {
                        "be-yourself-final": nameIndex == names.length - 1,
                    })}
                >
                    {names[nameIndex]}
                </span>
                <span>&nbsp;in Japanese.</span>
            </div>
            <div className="be-yourself-cta">
                Learn and retain the words you explore through deep dives into
                the most fascinating culture on Earth.
            </div>
        </div>
    )
}

export default BeYourself
