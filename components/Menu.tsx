import styles from "../styles/menu.module.css"
import { useEffect, useState } from "react"
// import { useSelector } from 'react-redux'
import { BookmarkIcon, HomeIcon, BriefcaseIcon, CogIcon, MicrophoneIcon} from "@heroicons/react/outline"
import { CheckCircleIcon } from "lucide-react"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from '../reducers/actions'


function Menu() {

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }

    const _storedAddress = useSelector((state: ConnectedAddress) => state.connectedAddress)

    


    return (
        <div className={hamburgerState ? styles.menu : styles.menuActive}>
            {hamburgerState && <>
                <Link href='/'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <HomeIcon className={styles.ChevronUpIcon} />
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href='/about'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <MicrophoneIcon className={styles.ChevronUpIcon} />
                        <h1>About</h1>
                    </div>
                </Link>
                {/* <Link href='/caseStudies'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BriefcaseIcon className={styles.ChevronUpIcon} />
                        <h1>CaseStudies</h1>
                    </div>
                </Link> */}
                <Link href='/projects'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <CogIcon className={styles.ChevronUpIcon} />
                        <h1>Projects</h1>
                    </div>
                </Link>
                <Link href='/blogPosts'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BookmarkIcon className={styles.ChevronUpIcon} />
                        <h1>Blog Posts</h1>
                    </div>
                </Link>
                {/* <Link href='/certifications'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <CheckCircleIcon className={styles.ChevronUpIcon} />
                        <h1>Certifications</h1>
                    </div>
                </Link> */}

            </>}
        </div>
    )
}

export default Menu